/**
 * @file Configuration - commitlint
 * @module config/commitlint
 * @see https://commitlint.js.org
 */

import { RuleConfigSeverity, type UserConfig } from '@commitlint/types'
import { max, parserPreset, scopes } from '@flex-development/commitlint-config'

/**
 * List of commit scopes.
 *
 * @const {string[]} scopeList
 */
const scopeList: string[] = scopes([
  'chore',
  'theme',
  'theme/components',
  'theme/interfaces'
])

/**
 * `commitlint` configuration object.
 *
 * @const {UserConfig} config
 */
const config: UserConfig = {
  extends: ['@flex-development'],
  parserPreset: {
    ...parserPreset,
    parserOpts: {
      ...parserPreset.parserOpts,
      headerPattern:
        /^(?<type>[a-z]+)(?:\((?<scope>[/a-z-]+)\))?(?<breaking>!)?: +(?<subject>(?:.+ \(#(?<pr>\d+)\))|.+)/i
    }
  },
  rules: {
    'scope-enum': [RuleConfigSeverity.Error, 'always', scopeList],
    'scope-max-length': [RuleConfigSeverity.Error, 'always', max(scopeList)]
  }
}

export default config
