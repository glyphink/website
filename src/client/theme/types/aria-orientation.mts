/**
 * @file Type Aliases - AriaOrientation
 * @module website/theme/types/AriaOrientation
 */

import type { AriaOrientationMap } from '@glyphink/website/theme'

/**
 * Union of [`aria-orientation`][aria-orientation] values.
 *
 * To register custom values, augment {@linkcode AriaOrientationMap}. They will
 * be added to this union automatically.
 *
 * [aria-orientation]: https://www.w3.org/TR/wai-aria-1.2/#aria-orientation
 */
type AriaOrientation = AriaOrientationMap[keyof AriaOrientationMap]

export type { AriaOrientation as default }
