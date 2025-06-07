/**
 * @file Components - ThematicBreak
 * @module website/theme/components/atoms/ThematicBreak
 */

import type { Props } from '@glyphink/website/theme'
import {
  forwardRef,
  type ForwardedRef,
  type ForwardRefExoticComponent,
  type JSX
} from 'react'
import type ThematicBreakProps from './ThematicBreak.props.mts'

/**
 * A thematic break.
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hr
 * @see {@linkcode ForwardRefExoticComponent}
 * @see {@linkcode ThematicBreakProps}
 *
 * @category
 *  atoms
 *
 * @const {ForwardRefExoticComponent<ThematicBreakProps>} ThematicBreak
 */
const ThematicBreak: ForwardRefExoticComponent<ThematicBreakProps> = forwardRef<
  HTMLHRElement,
  ThematicBreakProps
>(
  /**
   * @param {Props<ThematicBreakProps>} props
   *  Component props
   * @param {ForwardedRef<HTMLHRElement>} ref
   *  Forwarded ref
   * @return {JSX.Element}
   *  JSX `<hr>` element
   */
  (
    props: Props<ThematicBreakProps>,
    ref: ForwardedRef<HTMLHRElement>
  ): JSX.Element => {
    return <hr {...props} ref={ref} />
  }
)

ThematicBreak.displayName = 'ThematicBreak'

export default ThematicBreak
