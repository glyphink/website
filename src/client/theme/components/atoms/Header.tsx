/**
 * @file Components - Header
 * @module website/theme/components/atoms/Header
 */

import type { Props } from '@glyphink/website/theme'
import {
  forwardRef,
  type ForwardedRef,
  type FRC,
  type JSX
} from 'react'
import type HeaderProps from './Header.props.mts'

/**
 * Introductory content.
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/header
 * @see {@linkcode FRC}
 * @see {@linkcode HeaderProps}
 *
 * @category
 *  atoms
 *
 * @const {FRC<HeaderProps>} Header
 */
const Header: FRC<HeaderProps> = forwardRef<HTMLElement, HeaderProps>(
  /**
   * @param {Props<HeaderProps>} props
   *  Component props
   * @param {ForwardedRef<HTMLElement>} ref
   *  Forwarded ref
   * @return {JSX.Element}
   *  JSX `<header>` element
   */
  (props: Props<HeaderProps>, ref: ForwardedRef<HTMLElement>): JSX.Element => {
    return <header {...props} ref={ref} />
  }
)

Header.displayName = 'Header'

export default Header
