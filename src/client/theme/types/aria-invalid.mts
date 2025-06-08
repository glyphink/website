/**
 * @file Type Aliases - AriaInvalid
 * @module website/theme/types/AriaInvalid
 */

import type { AriaInvalidMap } from '@glyphink/website/theme'

/**
 * Union of [`aria-invalid`][aria-invalid] values.
 *
 * To register custom values, augment {@linkcode AriaInvalidMap}. They will be
 * added to this union automatically.
 *
 * [aria-invalid]: https://www.w3.org/TR/wai-aria-1.2/#aria-invalid
 */
type AriaInvalid = AriaInvalidMap[keyof AriaInvalidMap]

export type { AriaInvalid as default }
