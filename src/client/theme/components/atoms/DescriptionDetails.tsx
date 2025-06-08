/**
 * @file Components - DescriptionDetails
 * @module website/theme/components/atoms/DescriptionDetails
 */

import type { Props } from '@glyphink/website/theme'
import {
  forwardRef,
  type ForwardedRef,
  type FRC,
  type JSX
} from 'react'
import type DescriptionDetailsProps from './DescriptionDetails.props.mts'

/**
 * The description, definition, or value for the preceding term (`<dt>`) in a
 * description list (`<dl>`).
 *
 * > 👉 **Note**: Must be used inside a `DescriptionList` component.
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dd
 * @see {@linkcode DescriptionDetailsProps}
 * @see {@linkcode FRC}
 *
 * @category
 *  atoms
 *
 * @const {FRC<DescriptionDetailsProps>} DescriptionDetails
 */
const DescriptionDetails: FRC<DescriptionDetailsProps> = forwardRef<
  HTMLElement,
  DescriptionDetailsProps
>(
  /**
   * @param {Props<DescriptionDetailsProps>} props
   *  Component props
   * @param {ForwardedRef<HTMLElement>} ref
   *  Forwarded ref
   * @return {JSX.Element}
   *  JSX `<dd>` element
   */
  (
    props: Props<DescriptionDetailsProps>,
    ref: ForwardedRef<HTMLElement>
  ): JSX.Element => {
    return <dd {...props} ref={ref} />
  }
)

DescriptionDetails.displayName = 'DescriptionDetails'

export default DescriptionDetails
