/**
 * @file Configuration - Vite
 * @module config/vite
 * @see https://vite.dev/config
 */

import pathe from '@flex-development/pathe'
import react, { type BabelOptions } from '@vitejs/plugin-react'
import type { GetModuleInfo, ManualChunkMeta, ModuleInfo } from 'rollup'
import { defineConfig, type ConfigEnv, type UserConfig } from 'vite'
import tsconfig from './tsconfig.json' with { type: 'json' }

export default defineConfig(config)

/**
 * Create a Vite configuration.
 *
 * @this {void}
 *
 * @param {ConfigEnv} env
 *  The current config environment
 * @return {UserConfig}
 *  Vite configuration object
 */
function config(this: void, env: ConfigEnv): UserConfig {
  /**
   * Absolute path to app directory.
   *
   * @const {string} APP_ROOT
   */
  const APP_ROOT: string = pathe.resolve('src/client/app')

  /**
   * Regular expression used to match imported CSS files.
   *
   * @const {RegExp} CSS_LANGS_RE
   */
  const CSS_LANGS_RE: RegExp =
    /\.(css|less|postcss|s[ac]ss|styl(?:us)?)(?:$|\?)/

  /**
   * Regular expression used to match modules that should be included in the
   * manually created `framework` chunk.
   *
   * @const {RegExp} EAGER_FRAMEWORK_CHUNK_RE
   */
  const EAGER_FRAMEWORK_CHUNK_RE: RegExp =
    /@mdx-js|react(?:-dom)?|scheduler|weak-key/

  /**
   * Absolute path to theme directory.
   *
   * @const {string} THEME_ROOT
   */
  const THEME_ROOT: string = pathe.resolve('src/client/theme')

  return {
    assetsInclude: [pathe.join(THEME_ROOT, 'assets', '**')],
    build: {
      chunkSizeWarningLimit: 600,
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash].[ext]',
          chunkFileNames: 'assets/chunks/[name].[hash].mjs',
          entryFileNames: 'assets/[name].[hash].mjs',
          format: 'esm',

          /**
           * Create common chunks.
           *
           * @see https://rollupjs.org/configuration-options/#output-manualchunks
           *
           * @this {void}
           *
           * @param {string} id
           *  The resolved module id to evaluate
           * @param {ManualChunkMeta} meta
           *  Manual chunk metadata
           * @return {string | undefined}
           *  Chunk name or `undefined`
           */
          manualChunks(
            this: void,
            id: string,
            meta: ManualChunkMeta
          ): string | undefined {
            switch (true) {
              // app chunk
              case id === pathe.resolve(APP_ROOT, 'App.tsx'):
              case id === pathe.resolve(APP_ROOT, 'create-app.tsx'):
              case id === pathe.resolve(APP_ROOT, 'entry.client.mts'):
                return 'app'
              // framework chunk
              case id.startsWith('\0commonjs'):
              case id.startsWith('\0vite'):
              case id.startsWith(APP_ROOT):
              case id.startsWith(pathe.resolve('src/shared')):
              case (
                isEagerChunk(id, meta.getModuleInfo) &&
                EAGER_FRAMEWORK_CHUNK_RE.test(id)
              ):
                return 'framework'
              // theme chunk
              case id.startsWith(THEME_ROOT):
                return 'theme'
              default:
                return void id
            }
          }
        },
        preserveEntrySignatures: 'allow-extension'
      },
      sourcemap: true,
      ssr: false,
      ssrEmitAssets: false,
      target: tsconfig.compilerOptions.target
    },
    css: {
      modules: {
        exportGlobals: true,
        /**
         * Generate a CSS module classname.
         *
         * @see https://github.com/madyankin/postcss-modules#generating-scoped-names
         *
         * @this {void}
         *
         * @param {string} classname
         *  The original classname
         * @return {string}
         *  CSS module classname
         */
        generateScopedName(this: void, classname: string): string {
          return classname
        },
        globalModulePaths: [],
        localsConvention: 'dashes'
      },
      preprocessorOptions: {
        scss: {
          /**
           * Inject global `@use` directives into `content`.
           *
           * @this {void}
           *
           * @param {string} content
           *  The content of the stylesheet module
           * @param {string} id
           *  The absolute path to the module containing `content`
           * @return {string}
           *  Module `content` with global `@use` directives prepended,
           *  or the original `content` if `id` is not nested under theme
           *  directory ({@linkcode THEME_ROOT})
           */
          additionalData(this: void, content: string, id: string): string {
            if (id.startsWith(pathe.join(THEME_ROOT, 'components'))) {
              content = `@use '../../styles/abstracts/abstracts';\n` + content
            }

            return content
          },
          style: 'expanded'
        }
      }
    },
    esbuild: {
      jsxDev: env.mode === 'development',
      jsxImportSource: 'react',
      keepNames: true,
      target: tsconfig.compilerOptions.target,
      treeShaking: true, // @ts-expect-error `tsconfig` is raw tsconfig (2322).
      tsconfigRaw: tsconfig
    },
    plugins: [
      react({
        babel: (): BabelOptions => ({ babelrc: false, configFile: false }),
        include: /\.(?:mdx|tsx)$/
      })
    ],
    preview: {
      host: 'localhost',
      port: 4173,
      strictPort: true
    },
    resolve: {
      conditions: ['browser', ...tsconfig.compilerOptions.customConditions]
    },
    server: {
      strictPort: true
    }
  }

  /**
   * Check if a module is statically imported by at least one entry.
   *
   * @this {void}
   *
   * @param {string} id
   *  The id of the module to check
   * @param {GetModuleInfo} getModuleInfo
   *  Module info function
   * @return {boolean}
   *  `true` if `id` statically imported by at least one entry
   */
  function isEagerChunk(
    this: void,
    id: string,
    getModuleInfo: GetModuleInfo
  ): boolean {
    return (
      !CSS_LANGS_RE.test(id) &&
      id.includes('node_modules') &&
      staticImportedByEntry(id, getModuleInfo, new Map<string, boolean>())
    )
  }
}

/**
 * Check if a module is statically imported by an entry point.
 *
 * @this {void}
 *
 * @param {string} id
 *  The id of the module to check
 * @param {GetModuleInfo} getModuleInfo
 *  Module info function
 * @param {Map<string, boolean>} cache
 *  Map where each key is a module id and each value is a boolean indicating
 *  if the module was statically imported
 * @param {RegExp | null | undefined} [regex=null]
 *  Regular expression matching module specifier
 * @param {Set<string> | undefined} [importStack=new Set()]
 *  List of seen imports
 * @return {boolean}
 *  `true` if `id` is statically imported, `false` otherwise
 */
function staticImportedByEntry(
  this: void,
  id: string,
  getModuleInfo: GetModuleInfo,
  cache: Map<string, boolean>,
  regex: RegExp | null = null,
  importStack: Set<string> = new Set()
): boolean {
  // return cached result if module has been cached
  if (cache.has(id)) return !!cache.get(id)

  // circular deps -> not statically imported
  if (importStack.has(id)) return cache.set(id, false), false

  /**
   * Module info.
   *
   * @const {ModuleInfo | null} mod
   */
  const mod: ModuleInfo | null = getModuleInfo(id)

  // no module info -> not statically imported
  if (!mod) return cache.set(id, false), false

  // pattern match or entry point -> statically imported
  if (regex ? regex.test(id) : mod.isEntry) {
    cache.set(id, true)
    return true
  }

  // check if id was statically imported via importers
  cache.set(id, mod.importers.some((importer: string): boolean => {
    return staticImportedByEntry(
      importer,
      getModuleInfo,
      cache,
      regex,
      importStack.add(id)
    )
  }))

  return cache.get(id)!
}
