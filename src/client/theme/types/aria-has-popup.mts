/**
 * @file Type Aliases - AriaHasPopup
 * @module website/theme/types/AriaHasPopup
 */

import type { AriaHasPopupMap } from '@glyphink/website/theme'

/**
 * Union of [`aria-haspopup`][aria-haspopup] values.
 *
 * To register custom values, augment {@linkcode AriaHasPopupMap}. They will be
 * added to this union automatically.
 *
 * [aria-haspopup]: https://www.w3.org/TR/wai-aria-1.2/#aria-haspopup
 */
type AriaHasPopup = AriaHasPopupMap[keyof AriaHasPopupMap]

export type { AriaHasPopup as default }
