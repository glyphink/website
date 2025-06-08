/**
 * @file Interfaces - AriaHasPopupMap
 * @module website/theme/interfaces/AriaHasPopupMap
 */

import type { Booleanish } from '@glyphink/website/theme'

/**
 * Registry of [`aria-haspopup`][aria-haspopup] values.
 *
 * [aria-haspopup]: https://www.w3.org/TR/wai-aria-1.2/#aria-haspopup
 */
interface AriaHasPopupMap {
  booleanish: Booleanish
  dialog: 'dialog'
  grid: 'grid'
  listbox: 'listbox'
  menu: 'menu'
  tree: 'tree'
}

export type { AriaHasPopupMap as default }
