/**
 * @file Components - Anchor
 * @module website/theme/components/atoms/Anchor
 */

import type { Props } from '@glyphink/website/theme'
import {
  forwardRef,
  type ForwardedRef,
  type FRC,
  type JSX
} from 'react'
import type AnchorProps from './Anchor.props.mts'

/**
 * A hyperlink to web pages, files, email addresses, locations in the same page,
 * or anything else a URL can address.
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a
 * @see {@linkcode AnchorProps}
 * @see {@linkcode FRC}
 *
 * @category
 *  atoms
 *
 * @const {FRC<AnchorProps>} Anchor
 */
const Anchor: FRC<AnchorProps> = forwardRef<HTMLAnchorElement, AnchorProps>(
  /**
   * @param {Props<AnchorProps>} props
   *  Component props
   * @param {ForwardedRef<HTMLAnchorElement>} ref
   *  Forwarded ref
   * @return {JSX.Element}
   *  JSX `<a>` element
   */
  (
    props: Props<AnchorProps>,
    ref: ForwardedRef<HTMLAnchorElement>
  ): JSX.Element => { // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <a {...props} ref={ref} target={props.target ?? '_self'} />
  }
)

Anchor.displayName = 'Anchor'

export default Anchor
