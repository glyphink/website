/**
 * @file Interfaces - AriaInvalidMap
 * @module website/theme/interfaces/AriaInvalidMap
 */

import type { Booleanish } from '@glyphink/website/theme'

/**
 * Registry of [`aria-invalid`][aria-invalid] values.
 *
 * [aria-invalid]: https://www.w3.org/TR/wai-aria-1.2/#aria-invalid
 */
interface AriaInvalidMap {
  booleanish: Booleanish
  grammar: 'grammar'
  spelling: 'spelling'
}

export type { AriaInvalidMap as default }
