/**
 * @file Interfaces - AriaPressedMap
 * @module website/theme/interfaces/AriaPressedMap
 */

import type { Booleanish } from '@glyphink/website/theme'

/**
 * Registry of [`aria-pressed`][aria-pressed] values.
 *
 * [aria-pressed]: https://www.w3.org/TR/wai-aria-1.2/#aria-pressed
 */
interface AriaPressedMap {
  booleanish: Booleanish
  mixed: 'mixed'
}

export type { AriaPressedMap as default }
