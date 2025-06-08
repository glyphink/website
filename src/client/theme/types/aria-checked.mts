/**
 * @file Type Aliases - AriaChecked
 * @module website/theme/types/AriaChecked
 */

import type { AriaCheckedMap } from '@glyphink/website/theme'

/**
 * Union of [`aria-checked`][aria-checked] values.
 *
 * To register custom values, augment {@linkcode AriaCheckedMap}. They will be
 * added to this union automatically.
 *
 * [aria-checked]: https://www.w3.org/TR/wai-aria-1.2/#aria-checked
 */
type AriaChecked = AriaCheckedMap[keyof AriaCheckedMap]

export type { AriaChecked as default }
