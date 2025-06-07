/**
 * @file Components - Content
 * @module website/theme/components/atoms/Content
 */

import type { Props } from '@glyphink/website/theme'
import cx from 'classnames'
import { ok } from 'devlop'
import type { FC, JSX } from 'react'
import Box from './Box'
import classes from './Content.module.scss'
import type ContentProps from './Content.props.mts'

/**
 * Page content.
 *
 * @see {@linkcode ContentProps}
 * @see {@linkcode FC}
 * @see {@linkcode Props}
 *
 * @category
 *  atoms
 *
 * @type {FC<ContentProps>}
 *
 * @param {Props<ContentProps>} props
 *  Component props
 * @return {JSX.Element}
 *  `Box` element
 */
const Content: FC<ContentProps> = (props: Props<ContentProps>): JSX.Element => {
  ok(classes.content, 'expected `classes.content`')

  return (
    <Box
      {...props}
      className={cx(classes.content, props.className)}
      id='content'
    />
  )
}

Content.displayName = 'Content'

export default Content
