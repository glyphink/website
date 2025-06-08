/**
 * @file Interfaces - AriaAutoCompleteMap
 * @module website/theme/interfaces/AriaAutoCompleteMap
 */

/**
 * Registry of [`aria-autocomplete`][aria-autocomplete] values.
 *
 * [aria-autocomplete]: https://www.w3.org/TR/wai-aria-1.2/#aria-autocomplete
 */
interface AriaAutoCompleteMap {
  both: 'both'
  inline: 'inline'
  list: 'list'
  none: 'none'
}

export type { AriaAutoCompleteMap as default }
