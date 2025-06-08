/**
 * @file Atoms - Heading
 * @module website/components/atoms/Heading
 */

import type { Props } from '@glyphink/website/theme'
import {
  createElement,
  forwardRef,
  type ForwardedRef,
  type FRC,
  type JSX
} from 'react'
import type HeadingProps from './Heading.props.mts'

/**
 * A section heading.
 *
 * Use `props.size` to change the heading level.
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements
 * @see {@linkcode FRC}
 * @see {@linkcode HeadingProps}
 *
 * @category
 *  atoms
 *
 * @const {FRC<HeadingProps>} Heading
 */
const Heading: FRC<HeadingProps> = forwardRef<HTMLHeadingElement, HeadingProps>(
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
