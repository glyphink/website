/**
 * @file Interfaces - AriaLiveMap
 * @module website/theme/interfaces/AriaLiveMap
 */

/**
 * Registry of [`aria-live`][aria-live] values.
 *
 * [aria-live]: https://www.w3.org/TR/wai-aria-1.2/#aria-live
 */
interface AriaLiveMap {
  assertive: 'assertive'
  off: 'off'
  polite: 'polite'
}

export type { AriaLiveMap as default }
