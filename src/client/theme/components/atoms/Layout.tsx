/**
 * @file Components - Layout
 * @module website/theme/components/atoms/Layout
 */

import type { Props } from '@glyphink/website/theme'
import cx from 'classnames'
import { ok } from 'devlop'
import type { FC, JSX } from 'react'
import Box from './Box.tsx'
import Content from './Content.tsx'
import classes from './Layout.module.scss'
import type LayoutProps from './Layout.props.mts'

/**
 * Page layout.
 *
 * @see {@linkcode LayoutProps}
 *
 * @type {FC<LayoutProps>}
 *
 * @param {Props<LayoutProps>} props
 *  Component props
 * @return {JSX.Element}
 *  `Box` element
 */
const Layout: FC<LayoutProps> = (props: Props<LayoutProps>): JSX.Element => {
  ok(classes.layout, 'expected `classes.layout`')

  return (
    <Box {...props} className={cx(classes.layout, props.className)}>
      <Content>
        {props.children}
      </Content>
    </Box>
  )
}

Layout.displayName = 'Layout'

export default Layout
