/**
 * @file Type Aliases - AriaSort
 * @module website/theme/types/AriaSort
 */

import type { AriaSortMap } from '@glyphink/website/theme'

/**
 * Union of [`aria-sort`][aria-sort] values.
 *
 * To register custom values, augment {@linkcode AriaSortMap}. They will be
 * added to this union automatically.
 *
 * [aria-sort]: https://www.w3.org/TR/wai-aria-1.2/#aria-sort
 */
type AriaSort = AriaSortMap[keyof AriaSortMap]

export type { AriaSort as default }
