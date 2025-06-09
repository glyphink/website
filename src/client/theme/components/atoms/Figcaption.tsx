/**
 * @file Components - Figcaption
 * @module website/theme/components/atoms/Figcaption
 */

import type { Props } from '@glyphink/website/theme'
import {
  forwardRef,
  type ForwardedRef,
  type FRC,
  type JSX
} from 'react'
import type FigcaptionProps from './Figcaption.props.mts'

/**
 * A caption or legend describing the contents of the parent `Figure`, providing
 * the `Figure` has an [accessible description][accessible-description].
 *
 * [accessible-description]: https://developer.mozilla.org/docs/Glossary/Accessible_description
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/figcaption
 * @see {@linkcode FigcaptionProps}
 * @see {@linkcode FRC}
 *
 * @category
 *  atoms
 *
 * @const {FRC<FigcaptionProps>} Figcaption
 */
const Figcaption: FRC<FigcaptionProps> = forwardRef<
  HTMLElement,
  FigcaptionProps
>(
  /**
   * @param {Props<FigcaptionProps>} props
   *  Component props
   * @param {ForwardedRef<HTMLElement>} ref
   *  Forwarded ref
   * @return {JSX.Element}
   *  JSX `<figcaption>` element
   */
  (
    props: Props<FigcaptionProps>,
    ref: ForwardedRef<HTMLElement>
  ): JSX.Element => {
    return <figcaption {...props} ref={ref} />
  }
)

Figcaption.displayName = 'Figcaption'

export default Figcaption
