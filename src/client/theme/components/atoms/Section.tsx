/**
 * @file Components - Section
 * @module website/theme/components/atoms/Section
 */

import type { Props } from '@glyphink/website/theme'
import {
  forwardRef,
  type ForwardedRef,
  type FRC,
  type JSX
} from 'react'
import type SectionProps from './Section.props.mts'

/**
 * A standalone section.
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/section
 * @see {@linkcode FRC}
 * @see {@linkcode SectionProps}
 *
 * @category
 *  atoms
 *
 * @const {FRC<SectionProps>} Section
 */
const Section: FRC<SectionProps> = forwardRef<HTMLElement, SectionProps>(
  /**
   * @param {Props<SectionProps>} props
   *  Component props
   * @param {ForwardedRef<HTMLElement>} ref
   *  Forwarded ref
   * @return {JSX.Element}
   *  JSX `<section>` element
   */
  (props: Props<SectionProps>, ref: ForwardedRef<HTMLElement>): JSX.Element => {
    return <section {...props} ref={ref} />
  }
)

Section.displayName = 'Section'

export default Section
