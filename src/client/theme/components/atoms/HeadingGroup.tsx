/**
 * @file Atoms - HeadingGroup
 * @module website/components/atoms/HeadingGroup
 */

import type { Props } from '@glyphink/website/theme'
import {
  forwardRef,
  type ForwardedRef,
  type FRC,
  type JSX
} from 'react'
import type HeadingGroupProps from './HeadingGroup.props.mts'

/**
 * A heading and related content.
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hgroup
 * @see {@linkcode FRC}
 * @see {@linkcode HeadingGroupProps}
 *
 * @category
 *  atoms
 *
 * @const {FRC<HeadingGroupProps>} HeadingGroup
 */
const HeadingGroup: FRC<HeadingGroupProps> = forwardRef<
  HTMLElement,
  HeadingGroupProps
>(
  /**
   * @param {Props<HeadingGroupProps>} props
   *  Component props
   * @param {ForwardedRef<HTMLElement>} ref
   *  Forwarded ref
   * @return {JSX.Element}
   *  JSX `<hgroup>` element
   */
  (
    props: Props<HeadingGroupProps>,
    ref: ForwardedRef<HTMLElement>
  ): JSX.Element => {
    return <hgroup {...props} ref={ref} />
  }
)

HeadingGroup.displayName = 'HeadingGroup'

export default HeadingGroup
