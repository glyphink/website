/**
 * @file Type Aliases - AriaDropEffect
 * @module website/theme/types/AriaDropEffect
 */

import type { AriaDropEffectMap } from '@glyphink/website/theme'

/**
 * Union of [`aria-dropeffect`][aria-dropeffect] values.
 *
 * To register custom values, augment {@linkcode AriaDropEffectMap}. They will
 * be added to this union automatically.
 *
 * [aria-dropeffect]: https://www.w3.org/TR/wai-aria-1.2/#aria-dropeffect
 *
 * @deprecated ARIA 1.1
 */
type AriaDropEffect = AriaDropEffectMap[keyof AriaDropEffectMap]

export type { AriaDropEffect as default }
