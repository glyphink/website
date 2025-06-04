/**
 * @file eslint
 * @module config/eslint
 * @see https://eslint.org/docs/user-guide/configuring
 */

import fldv from '@flex-development/eslint-config'
import html from '@html-eslint/eslint-plugin'
import htmlParser from '@html-eslint/parser'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'

/**
 * eslint configuration.
 *
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  ...fldv.configs.node,
  {
    ignores: ['.vercel/']
  },
  {
    files: ['**/*.html', '**/*.svg'],
    languageOptions: { parser: htmlParser },
    plugins: {
      '@html-eslint': html
    },
    rules: {
      '@html-eslint/element-newline': 2,
      '@html-eslint/id-naming-convention': [2, 'kebab-case'],
      '@html-eslint/indent': [2, 2],
      '@html-eslint/no-duplicate-attrs': 2,
      '@html-eslint/no-duplicate-id': 2,
      '@html-eslint/no-extra-spacing-attrs': [
        2,
        {
          disallowMissing: true,
          enforceBeforeSelfClose: true
        }
      ],
      '@html-eslint/no-multiple-empty-lines': 2,
      '@html-eslint/no-obsolete-tags': 2,
      '@html-eslint/quotes': [2, 'double'],
      '@html-eslint/require-closing-tags': [2, { selfClosing: 'always' }]
    }
  },
  {
    files: ['**/*.html'],
    rules: {
      '@html-eslint/no-inline-styles': 2,
      '@html-eslint/require-doctype': 2,
      '@html-eslint/require-meta-charset': 2,
      '@html-eslint/require-meta-viewport': 2
    }
  },
  {
    files: ['**/*.+(mdx|tsx)'],
    languageOptions: {
      globals: { React: false },
      parserOptions: { ecmaFeatures: { jsx: true } }
    },
    plugins: {
      react
    },
    rules: {
      'react/react-in-jsx-scope': 0
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    files: ['**/*.mdx'],
    rules: {
      'no-unused-expressions': 2,
      'no-unused-vars': 0
    }
  },
  {
    files: ['**/*.tsx'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      'react/boolean-prop-naming': 0,
      'react/button-has-type': 2,
      'react/default-props-match-prop-types': 2,
      'react/destructuring-assignment': [
        0,
        'always',
        {
          destructureInSignature: 'always',
          ignoreClassFields: true
        }
      ],
      'react/display-name': 2,
      'react/forbid-component-props': [2, { forbid: ['style'] }],
      'react/forbid-dom-props': [2, { forbid: ['style'] }],
      'react/forbid-elements': 2,
      'react/forbid-foreign-prop-types': 2,
      'react/forbid-prop-types': 2,
      'react/function-component-definition': 0,
      'react/hook-use-state': 2,
      'react/iframe-missing-sandbox': 2,
      'react/jsx-boolean-value': 2,
      'react/jsx-child-element-spacing': 2,
      'react/jsx-closing-bracket-location': 2,
      'react/jsx-closing-tag-location': 2,
      'react/jsx-curly-brace-presence': 2,
      'react/jsx-curly-newline': 2,
      'react/jsx-curly-spacing': 2,
      'react/jsx-equals-spacing': 2,
      'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }],
      'react/jsx-first-prop-new-line': 2,
      'react/jsx-fragments': [2, 'syntax'],
      'react/jsx-handler-names': 2,
      'react/jsx-indent': [2, 2],
      'react/jsx-indent-props': [2, 2],
      'react/jsx-key': 2,
      'react/jsx-max-depth': [2, { max: 5 }],
      'react/jsx-max-props-per-line': [
        2,
        {
          maximum: 1,
          when: 'multiline'
        }
      ],
      'react/jsx-newline': 0,
      'react/jsx-no-bind': 2,
      'react/jsx-no-comment-textnodes': 2,
      'react/jsx-no-constructed-context-values': 2,
      'react/jsx-no-duplicate-props': 2,
      'react/jsx-no-leaked-render': 2,
      'react/jsx-no-literals': 0,
      'react/jsx-no-script-url': 2,
      'react/jsx-no-target-blank': 2,
      'react/jsx-no-undef': 2,
      'react/jsx-no-useless-fragment': 2,
      'react/jsx-one-expression-per-line': [2, { allow: 'single-child' }],
      'react/jsx-pascal-case': [2, { allowAllCaps: true }],
      'react/jsx-props-no-multi-spaces': 2,
      'react/jsx-props-no-spreading': 0,
      'react/jsx-sort-props': 2,
      'react/jsx-tag-spacing': 2,
      'react/jsx-uses-react': 0,
      'react/jsx-uses-vars': 2,
      'react/jsx-wrap-multilines': 2,
      'react/no-access-state-in-setstate': 2,
      'react/no-adjacent-inline-elements': 2,
      'react/no-array-index-key': 2,
      'react/no-arrow-function-lifecycle': 2,
      'react/no-children-prop': 2,
      'react/no-danger': 2,
      'react/no-danger-with-children': 2,
      'react/no-deprecated': 2,
      'react/no-did-mount-set-state': 2,
      'react/no-did-update-set-state': 2,
      'react/no-direct-mutation-state': 2,
      'react/no-find-dom-node': 2,
      'react/no-invalid-html-attribute': 2,
      'react/no-is-mounted': 2,
      'react/no-multi-comp': 2,
      'react/no-namespace': 2,
      'react/no-object-type-as-default-prop': 2,
      'react/no-redundant-should-component-update': 2,
      'react/no-render-return-value': 2,
      'react/no-set-state': 2,
      'react/no-string-refs': 2,
      'react/no-this-in-sfc': 2,
      'react/no-typos': 2,
      'react/no-unescaped-entities': 2,
      'react/no-unknown-property': [2, { ignore: ['css'] }],
      'react/no-unsafe': 0,
      'react/no-unstable-nested-components': 2,
      'react/no-unused-class-component-methods': 2,
      'react/no-unused-prop-types': 2,
      'react/no-unused-state': 2,
      'react/no-will-update-set-state': 2,
      'react/prefer-es6-class': 2,
      'react/prefer-exact-props': 2,
      'react/prefer-read-only-props': 2,
      'react/prefer-stateless-function': 2,
      'react/prop-types': 0,
      'react/react-in-jsx-scope': 0,
      'react/require-default-props': 2,
      'react/require-optimization': 2,
      'react/require-render-return': 2,
      'react/self-closing-comp': 1,
      'react/sort-comp': 2,
      'react/sort-default-props': 2,
      'react/sort-prop-types': 2,
      'react/state-in-constructor': 2,
      'react/static-property-placement': 2,
      'react/style-prop-object': 2,
      'react/void-dom-elements-no-children': 2,
      'react-hooks/exhaustive-deps': 2,
      'react-hooks/rules-of-hooks': 2,
      'react-refresh/only-export-components': [
        1,
        {
          allowConstantExport: true
        }
      ],
      'unicorn/filename-case': [
        2,
        {
          cases: {
            kebabCase: true,
            pascalCase: true,
            snakeCase: true
          }
        }
      ],
      'unicorn/no-document-cookie': 2,
      'unicorn/no-invalid-remove-event-listener': 2,
      'unicorn/prefer-add-event-listener': 2,
      'unicorn/prefer-dom-node-append': 2,
      'unicorn/prefer-dom-node-dataset': 2,
      'unicorn/prefer-dom-node-remove': 2,
      'unicorn/prefer-dom-node-text-content': 2,
      'unicorn/prefer-keyboard-event-key': 2,
      'unicorn/prefer-modern-dom-apis': 2,
      'unicorn/prefer-query-selector': 2,
      'unicorn/require-post-message-target-origin': 2
    }
  },
  {
    files: ['src/client/**/*.tsx'],
    languageOptions: {
      globals: globals.browser
    }
  },
  {
    files: ['src/client/app/entry.client.mts'],
    rules: {
      'promise/prefer-await-to-then': 0
    }
  },
  {
    files: [
      'src/client/theme/components/**/*.props.mts',
      'src/client/theme/components/**/*.props.spec-d.mts',
      'src/client/theme/components/**/**.tsx'
    ],
    rules: {
      'unicorn/filename-case': [2, { cases: { pascalCase: true } }]
    }
  }
]
