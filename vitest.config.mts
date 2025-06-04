/**
 * @file Configuration - Vitest
 * @module config/vitest
 * @see https://vitest.dev/config
 */

import Notifier from '#tests/reporters/notifier'
import VerboseReporter from '#tests/reporters/verbose'
import pathe from '@flex-development/pathe'
import pkg from '@glyphink/website/package.json' with { type: 'json' }
import ci from 'is-ci'
import {
  defineConfig,
  type ConfigEnv,
  type ViteUserConfig
} from 'vitest/config'
import type { TypecheckConfig } from 'vitest/node'
import tsconfig from './tsconfig.json' with { type: 'json' }

export default defineConfig(config)

/**
 * Create a vitest configuration.
 *
 * @see {@linkcode ConfigEnv}
 * @see {@linkcode ViteUserConfig}
 *
 * @this {void}
 *
 * @param {ConfigEnv} env
 *  Configuration environment
 * @return {ViteUserConfig}
 *  Root vitest configuration object
 */
function config(this: void, env: ConfigEnv): ViteUserConfig {
  /**
   * Options used to configure typechecks.
   *
   * @const {Partial<TypecheckConfig>} typecheck
   */
  const typecheck: Partial<TypecheckConfig> = {
    allowJs: false,
    checker: 'tsc',
    enabled: env.mode === 'typecheck',
    ignoreSourceErrors: false,
    only: true,
    tsconfig: 'tsconfig.json'
  }

  return {
    test: {
      allowOnly: !ci,
      chaiConfig: {
        includeStack: true,
        showDiff: true,
        truncateThreshold: 0
      },
      clearMocks: true,
      coverage: {
        all: true,
        clean: true,
        cleanOnRerun: true,
        exclude: [
          '**/*.d.mts',
          '**/__mocks__/',
          '**/__tests__/',
          '**/index.mts',
          '**/interfaces/',
          '**/types/',
          'src/client/app/App.tsx',
          'src/client/app/create-app.tsx',
          'src/client/app/entry.client.mts',
          'src/client/theme/components/**/*.props.mts',
          'src/client/theme/enums/'
        ],
        extension: ['.mts', '.tsx'],
        include: ['src'],
        provider: 'v8',
        reportOnFailure: !ci,
        reporter: env.mode === 'reports'
          ? ['text']
          : [ci ? 'lcovonly' : 'html', 'json-summary', 'text'],
        reportsDirectory: './coverage',
        skipFull: false,
        thresholds: { 100: true, perFile: true }
      },
      globalSetup: [],
      globals: true,
      mockReset: true,
      outputFile: {
        blob: pathe.join('.vitest-reports', env.mode + '.blob.json'),
        json: pathe.join('__tests__', 'reports', env.mode + '.json')
      },
      passWithNoTests: true,
      projects: [
        {
          extends: true,
          resolve: {
            conditions: [
              'browser',
              ...tsconfig.compilerOptions.customConditions
            ]
          },
          test: {
            css: { modules: { classNameStrategy: 'non-scoped' } },
            environment: 'happy-dom',
            environmentOptions: {},
            include: [
              'src/client/**/__tests__/*.spec.mts',
              'src/client/**/__tests__/*.spec.tsx'
            ],
            name: pkg.name + pathe.sep + 'client',
            setupFiles: [],
            typecheck: Object.assign({}, typecheck, {
              include: ['src/client/**/__tests__/*.spec-d.mts']
            })
          }
        }
      ],
      reporters: JSON.parse(process.env.VITEST_UI ?? '0')
        ? [new Notifier(), new VerboseReporter()]
        : env.mode === 'reports'
        ? [new VerboseReporter()]
        : [
          ci ? 'github-actions' : new Notifier(),
          'blob',
          'json',
          new VerboseReporter()
        ],
      /**
       * Store snapshots next to the directory of `file`.
       *
       * @this {void}
       *
       * @param {string} file
       *  Path to test file
       * @param {string} extension
       *  Snapshot extension
       * @return {string}
       *  Custom snapshot path
       */
      resolveSnapshotPath(
        this: void,
        file: string,
        extension: string
      ): string {
        /**
         * Regular expression matching test module file extensions.
         *
         * @const {RegExp} ext
         */
        const ext: RegExp = /\.spec.((?:mts)|(?:tsx))$/

        return pathe.resolve(
          pathe.join(pathe.dirname(pathe.dirname(file)), '__snapshots__'),
          pathe.basename(file).replace(ext, '') + extension
        )
      },
      restoreMocks: true,
      setupFiles: ['./__tests__/setup/chai.mts'],
      snapshotFormat: {
        callToJSON: true,
        min: false,
        printBasicPrototype: false,
        printFunctionName: true
      },
      snapshotSerializers: [],
      unstubEnvs: true,
      unstubGlobals: true
    }
  }
}
