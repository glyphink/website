/**
 * @file Components - Nav
 * @module website/theme/components/atoms/Nav
 */

import type { Props } from '@glyphink/website/theme'
import {
  forwardRef,
  type ForwardedRef,
  type FRC,
  type JSX
} from 'react'
import type NavProps from './Nav.props.mts'

/**
 * A group of navigation links.
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/nav
 * @see {@linkcode FRC}
 * @see {@linkcode NavProps}
 *
 * @category
 *  atoms
 *
 * @const {FRC<NavProps>} Nav
 */
const Nav: FRC<NavProps> = forwardRef<HTMLElement, NavProps>(
  /**
   * @param {Props<NavProps>} props
   *  Component props
   * @param {ForwardedRef<HTMLElement>} ref
   *  Forwarded ref
   * @return {JSX.Element}
   *  JSX `<nav>` element
   */
  (props: Props<NavProps>, ref: ForwardedRef<HTMLElement>): JSX.Element => {
    return <nav {...props} ref={ref} />
  }
)

Nav.displayName = 'Nav'

export default Nav
