/**
 * @file Type Aliases - AriaRelevant
 * @module website/theme/types/AriaRelevant
 */

import type { AriaRelevantMap } from '@glyphink/website/theme'

/**
 * Union of [`aria-relevant`][aria-relevant] values.
 *
 * To register custom values, augment {@linkcode AriaRelevantMap}. They will be
 * added to this union automatically.
 *
 * [aria-relevant]: https://www.w3.org/TR/wai-aria-1.2/#aria-relevant
 */
type AriaRelevant = AriaRelevantMap[keyof AriaRelevantMap]

export type { AriaRelevant as default }
