/**
 * @file Type Aliases - AriaPressed
 * @module website/theme/types/AriaPressed
 */

import type { AriaPressedMap } from '@glyphink/website/theme'

/**
 * Union of [`aria-pressed`][aria-pressed] values.
 *
 * To register custom values, augment {@linkcode AriaPressedMap}. They will be
 * added to this union automatically.
 *
 * [aria-pressed]: https://www.w3.org/TR/wai-aria-1.2/#aria-pressed
 */
type AriaPressed = AriaPressedMap[keyof AriaPressedMap]

export type { AriaPressed as default }
