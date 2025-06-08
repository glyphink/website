/**
 * @file Type Aliases - AriaLive
 * @module website/theme/types/AriaLive
 */

import type { AriaLiveMap } from '@glyphink/website/theme'

/**
 * Union of [`aria-live`][aria-live] values.
 *
 * To register custom values, augment {@linkcode AriaLiveMap}. They will be
 * added to this union automatically.
 *
 * [aria-live]: https://www.w3.org/TR/wai-aria-1.2/#aria-live
 */
type AriaLive = AriaLiveMap[keyof AriaLiveMap]

export type { AriaLive as default }
