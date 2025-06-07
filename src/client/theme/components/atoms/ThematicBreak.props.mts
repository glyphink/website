/**
 * @file Components - ThematicBreakProps
 * @module website/theme/components/atoms/ThematicBreakProps
 */

import type { GlobalAttributes } from '@glyphink/website/theme'

/**
 * ThematicBreak component props.
 *
 * @see {@linkcode GlobalAttributes}
 * @see {@linkcode HTMLHRElement}
 *
 * @extends {GlobalAttributes<HTMLHRElement>}
 */
interface ThematicBreakProps extends GlobalAttributes<HTMLHRElement> {
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

export type { ThematicBreakProps as default }
