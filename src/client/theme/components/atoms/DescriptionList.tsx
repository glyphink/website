/**
 * @file Components - DescriptionList
 * @module website/theme/components/atoms/DescriptionList
 */

import type { Props } from '@glyphink/website/theme'
import {
  forwardRef,
  type ForwardedRef,
  type FRC,
  type JSX
} from 'react'
import type DescriptionListProps from './DescriptionList.props.mts'

/**
 * A description list.
 *
 * The component encloses a list of groups of terms (`DescriptionTerm`) and
 * details (`DescriptionDetails`).
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dl
 * @see {@linkcode DescriptionListProps}
 * @see {@linkcode FRC}
 *
 * @category
 *  atoms
 *
 * @const {FRC<DescriptionListProps>} DescriptionList
 */
const DescriptionList: FRC<DescriptionListProps> = forwardRef<
  HTMLDListElement,
  DescriptionListProps
>(
  /**
   * @param {Props<DescriptionListProps>} props
   *  Component props
   * @param {ForwardedRef<HTMLDListElement>} ref
   *  Forwarded ref
   * @return {JSX.Element}
   *  JSX `<dl>` element
   */
  (
    props: Props<DescriptionListProps>,
    ref: ForwardedRef<HTMLDListElement>
  ): JSX.Element => {
    return <dl {...props} ref={ref} />
  }
)

DescriptionList.displayName = 'DescriptionList'

export default DescriptionList
