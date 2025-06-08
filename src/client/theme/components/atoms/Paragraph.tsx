/**
 * @file Atoms - Paragraph
 * @module website/components/atoms/Paragraph
 */

import type { Props } from '@glyphink/website/theme'
import {
  forwardRef,
  type ForwardedRef,
  type FRC,
  type JSX
} from 'react'
import type ParagraphProps from './Paragraph.props.mts'

/**
 * A paragraph.
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/p
 * @see {@linkcode FRC}
 * @see {@linkcode ParagraphProps}
 *
 * @category
 *  atoms
 *
 * @const {FRC<ParagraphProps>} Paragraph
 */
const Paragraph: FRC<ParagraphProps> = forwardRef<
  HTMLParagraphElement,
  ParagraphProps
>(
  /**
   * @param {Props<ParagraphProps>} props
   *  Component props
   * @param {ForwardedRef<HTMLParagraphElement>} ref
   *  Forwarded ref
   * @return {JSX.Element}
   *  JSX `<p>` element
   */
  (
    props: Props<ParagraphProps>,
    ref: ForwardedRef<HTMLParagraphElement>
  ): JSX.Element => {
    return <p {...props} ref={ref} />
  }
)

Paragraph.displayName = 'Paragraph'

export default Paragraph
