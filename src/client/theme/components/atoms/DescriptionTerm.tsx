/**
 * @file Components - DescriptionTerm
 * @module website/theme/components/atoms/DescriptionTerm
 */

import type { Props } from '@glyphink/website/theme'
import {
  forwardRef,
  type ForwardedRef,
  type FRC,
  type JSX
} from 'react'
import type DescriptionTermProps from './DescriptionTerm.props.mts'

/**
 * A term in a description or definition list.
 *
 * > 👉 **Note**: Must be used inside a `DescriptionList` component.
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dt
 * @see {@linkcode DescriptionTermProps}
 * @see {@linkcode FRC}
 *
 * @category
 *  atoms
 *
 * @const {FRC<DescriptionTermProps>} DescriptionTerm
 */
const DescriptionTerm: FRC<DescriptionTermProps> = forwardRef<
  HTMLElement,
  DescriptionTermProps
>(
  /**
   * @param {Props<DescriptionTermProps>} props
   *  Component props
   * @param {ForwardedRef<HTMLElement>} ref
   *  Forwarded ref
   * @return {JSX.Element}
   *  JSX `<dt>` element
   */
  (
    props: Props<DescriptionTermProps>,
    ref: ForwardedRef<HTMLElement>
  ): JSX.Element => {
    return <dt {...props} ref={ref} />
  }
)

DescriptionTerm.displayName = 'DescriptionTerm'

export default DescriptionTerm
