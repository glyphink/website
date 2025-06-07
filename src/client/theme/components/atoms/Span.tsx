/**
 * @file Atoms - Span
 * @module website/components/atoms/Span
 */

import type { Props } from '@glyphink/website/theme'
import {
  forwardRef,
  type ForwardedRef,
  type ForwardRefExoticComponent,
  type JSX
} from 'react'
import type SpanProps from './Span.props.mts'

/**
 * A generic inline container for phrasing content.
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/span
 * @see {@linkcode ForwardRefExoticComponent}
 * @see {@linkcode SpanProps}
 *
 * @category
 *  atoms
 *
 * @const {ForwardRefExoticComponent<SpanProps>} Span
 */
const Span: ForwardRefExoticComponent<SpanProps> = forwardRef<
  HTMLSpanElement,
  SpanProps
>(
  /**
   * @param {Props<SpanProps>} props
   *  Component props
   * @param {ForwardedRef<HTMLSpanElement>} ref
   *  Forwarded ref
   * @return {JSX.Element}
   *  JSX `<span>` element
   */
  (
    props: Props<SpanProps>,
    ref: ForwardedRef<HTMLSpanElement>
  ): JSX.Element => {
    return <span {...props} ref={ref} />
  }
)

Span.displayName = 'Span'

export default Span
