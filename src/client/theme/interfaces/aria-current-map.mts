/**
 * @file Interfaces - AriaCurrentMap
 * @module website/theme/interfaces/AriaCurrentMap
 */

import type { Booleanish } from '@glyphink/website/theme'

/**
 * Registry of [`aria-checked`][aria-current] values.
 *
 * [aria-current]: https://www.w3.org/TR/wai-aria-1.2/#aria-current
 */
interface AriaCurrentMap {
  booleanish: Booleanish
  date: 'date'
  location: 'location'
  page: 'page'
  step: 'step'
  time: 'time'
}

export type { AriaCurrentMap as default }
