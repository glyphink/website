/**
 * @file Type Aliases - AriaCurrent
 * @module website/theme/types/AriaCurrent
 */

import type { AriaCurrentMap } from '@glyphink/website/theme'

/**
 * Union of [`aria-current`][aria-current] values.
 *
 * To register custom values, augment {@linkcode AriaCurrentMap}. They will be
 * added to this union automatically.
 *
 * [aria-current]: https://www.w3.org/TR/wai-aria-1.2/#aria-current
 */
type AriaCurrent = AriaCurrentMap[keyof AriaCurrentMap]

export type { AriaCurrent as default }
