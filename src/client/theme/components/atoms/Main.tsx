/**
 * @file Components - Main
 * @module website/theme/components/atoms/Main
 */

import type { Props } from '@glyphink/website/theme'
import {
  forwardRef,
  type ForwardedRef,
  type ForwardRefExoticComponent,
  type JSX
} from 'react'
import type MainProps from './Main.props.mts'

/**
 * The dominant content of the `<body>` of a document.
 *
 * The main content area consists of content that is directly related to or
 * expands upon the central topic of a document, or the central functionality of
 * an application.
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/main
 * @see {@linkcode ForwardRefExoticComponent}
 * @see {@linkcode MainProps}
 *
 * @category
 *  atoms
 *
 * @const {ForwardRefExoticComponent<MainProps>} Main
 */
const Main: ForwardRefExoticComponent<MainProps> = forwardRef<
  HTMLElement,
  MainProps
>(
  /**
   * @param {Props<MainProps>} props
   *  Component props
   * @param {ForwardedRef<HTMLElement>} ref
   *  Forwarded ref
   * @return {JSX.Element}
   *  JSX `<main>` element
   */
  (props: Props<MainProps>, ref: ForwardedRef<HTMLElement>): JSX.Element => {
    return <main {...props} ref={ref} />
  }
)

Main.displayName = 'Main'

export default Main
