/**
 * @file Interfaces - AriaSortMap
 * @module website/theme/interfaces/AriaSortMap
 */

/**
 * Registry of [`aria-checked`][aria-checked] values.
 *
 * [aria-checked]: https://www.w3.org/TR/wai-aria-1.2/#aria-checked
 */
interface AriaSortMap {
  ascending: 'ascending'
  descending: 'descending'
  none: 'none'
  other: 'other'
}

export type { AriaSortMap as default }
