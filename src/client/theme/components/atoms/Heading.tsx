/**
 * @file Atoms - Heading
 * @module website/components/atoms/Heading/component
 */

import type { Props } from '@glyphink/website/theme'
import {
  createElement,
  forwardRef,
  type ForwardedRef,
  type ForwardRefExoticComponent,
  type JSX
} from 'react'
import type HeadingProps from './Heading.props.mts'

/**
 * A section heading.
 *
 * Use `props.size` to change the heading level.
 *
 * - https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements
 * - https://developer.mozilla.org/docs/Web/API/HTMLHeadingElement
 *
 * @see {@linkcode ForwardRefExoticComponent}
 * @see {@linkcode HeadingProps}
 *
 * @const {ForwardRefExoticComponent<HeadingProps>} Heading
 */
const Heading: ForwardRefExoticComponent<HeadingProps> = forwardRef<
  HTMLHeadingElement,
  HeadingProps
>(
  /**
   * @param {Props<HeadingProps>} props
   *  Component props
   * @param {ForwardedRef<HTMLHeadingElement>} ref
   *  Forwarded ref
   * @return {JSX.Element}
   *  JSX heading element
   */
  (
    props: Props<HeadingProps>,
    ref: ForwardedRef<HTMLHeadingElement>
  ): JSX.Element => {
    const { size, ...rest } = props
    return createElement('h' + size, { ...rest, ref })
  }
)

Heading.displayName = 'Heading'

export default Heading
