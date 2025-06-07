/**
 * @file Components - Section
 * @module website/theme/components/atoms/Section
 */

import type { Props } from '@glyphink/website/theme'
import {
  forwardRef,
  type ForwardedRef,
  type ForwardRefExoticComponent,
  type JSX
} from 'react'
import type SectionProps from './Section.props.mts'

/**
 * A standalone section.
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/section
 * @see {@linkcode ForwardRefExoticComponent}
 * @see {@linkcode SectionProps}
 *
 * @category
 *  atoms
 *
 * @const {ForwardRefExoticComponent<SectionProps>} Section
 */
const Section: ForwardRefExoticComponent<SectionProps> = forwardRef<
  HTMLElement,
  SectionProps
>(
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
