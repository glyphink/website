/**
 * @file Components - Box
 * @module website/theme/components/atoms/Box
 */

import type { Props } from '@glyphink/website/theme'
import {
  forwardRef,
  type ForwardedRef,
  type ForwardRefExoticComponent,
  type JSX
} from 'react'
import type BoxProps from './Box.props.mts'

/**
 * A `<div>` element.
 *
 * - https://developer.mozilla.org/docs/Web/API/HTMLDivElement
 *
 * @see {@linkcode BoxProps}
 * @see {@linkcode ForwardRefExoticComponent}
 *
 * @const {ForwardRefExoticComponent<BoxProps>} Box
 */
const Box: ForwardRefExoticComponent<BoxProps> = forwardRef<
  HTMLDivElement,
  BoxProps
>(
  /**
   * @param {Props<BoxProps>} props
   *  Component props
   * @param {ForwardedRef<HTMLDivElement>} ref
   *  Forwarded ref
   * @return {JSX.Element}
   *  JSX `<div>` element
   */
  (props: Props<BoxProps>, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    return <div {...props} ref={ref} />
  }
)

Box.displayName = 'Box'

export default Box
