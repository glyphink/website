/**
 * @file Type Aliases - Element
 * @module website/theme/types/Element
 */

import type { HtmlElements } from '@glyphink/website/theme'

/**
 * An HTML or SVG element.
 */
type Element = HtmlElements[keyof HtmlElements]

export type { Element as default }
