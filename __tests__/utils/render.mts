/**
 * @file Test Utilities - render
 * @module tests/utils/render
 */

import {
  render as renderComponent,
  type RenderOptions,
  type RenderResult
} from '@testing-library/react'
import type { ReactElement } from 'react'

/**
 * Render `element`.
 *
 * @this {void}
 *
 * @param {ReactElement} element
 *  The element to render
 * @param {RenderOptions | undefined} [options]
 *  Render options
 * @return {RenderResult}
 *  Render result
 */
function render(
  this: void,
  element: ReactElement,
  options: RenderOptions | undefined = {}
): RenderResult {
  return renderComponent(element, {
    ...options,
    legacyRoot: false,
    reactStrictMode: true
  })
}

export default render
