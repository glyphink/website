/**
 * @file Interfaces - AriaCheckedMap
 * @module website/theme/interfaces/AriaCheckedMap
 */

import type { Booleanish } from '@glyphink/website/theme'

/**
 * Registry of [`aria-checked`][aria-checked] values.
 *
 * [aria-checked]: https://www.w3.org/TR/wai-aria-1.2/#aria-checked
 */
interface AriaCheckedMap {
  booleanish: Booleanish
  mixed: 'mixed'
}

export type { AriaCheckedMap as default }
