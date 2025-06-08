/**
 * @file Interfaces - AriaDropEffectMap
 * @module website/theme/interfaces/AriaDropEffectMap
 */

/**
 * Registry of [`aria-dropeffect`][aria-dropeffect] values.
 *
 * [aria-dropeffect]: https://www.w3.org/TR/wai-aria-1.2/#aria-dropeffect
 *
 * @deprecated ARIA 1.1
 */
interface AriaDropEffectMap {
  copy: 'copy'
  execute: 'execute'
  link: 'link'
  move: 'move'
  none: 'none'
  popup: 'popup'
}

export type { AriaDropEffectMap as default }
