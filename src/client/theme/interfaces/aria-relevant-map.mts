/**
 * @file Interfaces - AriaRelevantMap
 * @module website/theme/interfaces/AriaRelevantMap
 */

/**
 * Registry of [`aria-relevant`][aria-relevant] values.
 *
 * [aria-relevant]: https://www.w3.org/TR/wai-aria-1.2/#aria-relevant
 */
interface AriaRelevantMap {
  additions: 'additions'
  additions_removals: 'additions removals'
  additions_text: 'additions text'
  all: 'all'
  removals: 'removals'
  removals_additions: 'removals additions'
  removals_text: 'removals text'
  text: 'text'
  text_additions: 'text additions'
  text_removals: 'text removals'
}

export type { AriaRelevantMap as default }
