/**
 * @file Components - HeadingProps
 * @module website/theme/components/atoms/HeadingProps
 */

import type { GlobalAttributes, HeadingSize } from '@glyphink/website/theme'

/**
 * Heading component props.
 *
 * @see {@linkcode GlobalAttributes}
 * @see {@linkcode HTMLHeadingElement}
 *
 * @extends {GlobalAttributes<HTMLHeadingElement>}
 */
interface HeadingProps extends GlobalAttributes<HTMLHeadingElement> {
  /**
   * The level of the heading to render.
   *
   * @see {@linkcode HeadingSize}
   */
  size: HeadingSize
}

export type { HeadingProps as default }
