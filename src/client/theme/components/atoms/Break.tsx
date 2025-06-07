/**
 * @file Components - Break
 * @module website/theme/components/atoms/Break
 */

import type { Props } from '@glyphink/website/theme'
import {
  forwardRef,
  type ForwardedRef,
  type ForwardRefExoticComponent,
  type JSX
} from 'react'
import type BreakProps from './Break.props.mts'

/**
 * A line break.
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/br
 * @see {@linkcode BreakProps}
 * @see {@linkcode ForwardRefExoticComponent}
 *
 * @category
 *  atoms
 *
 * @const {ForwardRefExoticComponent<BreakProps>} Break
 */
const Break: ForwardRefExoticComponent<BreakProps> = forwardRef<
  HTMLBRElement,
  BreakProps
>(
  /**
   * @param {Props<BreakProps>} props
   *  Component props
   * @param {ForwardedRef<HTMLBRElement>} ref
   *  Forwarded ref
   * @return {JSX.Element}
   *  JSX `<br>` element
   */
  (props: Props<BreakProps>, ref: ForwardedRef<HTMLBRElement>): JSX.Element => {
    return <br {...props} ref={ref} />
  }
)

Break.displayName = 'Break'

export default Break
