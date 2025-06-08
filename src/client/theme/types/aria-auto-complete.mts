/**
 * @file Type Aliases - AriaAutoComplete
 * @module website/theme/types/AriaAutoComplete
 */

import type { AriaAutoCompleteMap } from '@glyphink/website/theme'

/**
 * Union of [`aria-autocomplete`][aria-autocomplete] values.
 *
 * To register custom values, augment {@linkcode AriaAutoCompleteMap}. They will
 * be added to this union automatically.
 *
 * [aria-autocomplete]: https://www.w3.org/TR/wai-aria-1.2/#aria-autocomplete
 */
type AriaAutoComplete = AriaAutoCompleteMap[keyof AriaAutoCompleteMap]

export type { AriaAutoComplete as default }
