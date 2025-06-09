/**
 * @file Components - Figure
 * @module website/theme/components/atoms/Figure
 */

import type { Props } from '@glyphink/website/theme'
import {
  forwardRef,
  type ForwardedRef,
  type FRC,
  type JSX
} from 'react'
import type FigureProps from './Figure.props.mts'

/**
 * Self-contained content, potentially with an optional caption specified using
 * the `Figcaption` component. The figure, its caption, and its contents are
 * referenced as a single unit.
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/figure
 * @see {@linkcode FigureProps}
 * @see {@linkcode FRC}
 *
 * @category
 *  atoms
 *
 * @const {FRC<FigureProps>} Figure
 */
const Figure: FRC<FigureProps> = forwardRef<HTMLElement, FigureProps>(
  /**
   * @param {Props<FigureProps>} props
   *  Component props
   * @param {ForwardedRef<HTMLElement>} ref
   *  Forwarded ref
   * @return {JSX.Element}
   *  JSX `<figure>` element
   */
  (props: Props<FigureProps>, ref: ForwardedRef<HTMLElement>): JSX.Element => {
    return <figure {...props} ref={ref} />
  }
)

Figure.displayName = 'Figure'

export default Figure
