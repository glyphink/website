/**
 * @file Components - BreakProps
 * @module website/theme/components/atoms/BreakProps
 */

import type { GlobalAttributes } from '@glyphink/website/theme'

/**
 * Break component props.
 *
 * @see {@linkcode GlobalAttributes}
 * @see {@linkcode HTMLBRElement}
 *
 * @extends {GlobalAttributes<HTMLBRElement>}
 */
interface BreakProps extends GlobalAttributes<HTMLBRElement> {
  /**
   * Content to render inside the component.
   *
   * @override
   */
  children?: undefined

  /**
   * Replacement for using `innerHTML` in the browser DOM.
   *
   * @override
   */
  dangerouslySetInnerHTML?: undefined
}

export type { BreakProps as default }
