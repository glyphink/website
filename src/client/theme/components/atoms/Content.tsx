/**
 * @file Components - Content
 * @module website/theme/components/atoms/Content
 */

import type { Props } from '@glyphink/website/theme'
import cx from 'classnames'
import { ok } from 'devlop'
import {
  forwardRef,
  type ForwardedRef,
  type ForwardRefExoticComponent,
  type JSX
} from 'react'
import Box from './Box'
import classes from './Content.module.scss'
import type ContentProps from './Content.props.mts'

/**
 * Page content.
 *
 * @see {@linkcode ContentProps}
 * @see {@linkcode ForwardRefExoticComponent}
 *
 * @const {ForwardRefExoticComponent<ContentProps>} Content
 */
const Content: ForwardRefExoticComponent<ContentProps> = forwardRef<
  HTMLDivElement,
  ContentProps
>(
  /**
   * @param {Props<ContentProps>} props
   *  Component props
   * @param {ForwardedRef<HTMLDivElement>} ref
   *  Forwarded ref
   * @return {JSX.Element}
   *  `Box` element
   */
  (
    props: Props<ContentProps>,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    ok(classes.content, 'expected `classes.content`')

    return (
      <Box
        {...props}
        className={cx(classes.content, props.className)}
        id='content'
        ref={ref}
      />
    )
  }
)

Content.displayName = 'Content'

export default Content
