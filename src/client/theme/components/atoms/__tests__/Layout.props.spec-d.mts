/**
 * @file Type Tests - LayoutProps
 * @module website/theme/components/atoms/tests/unit-d/LayoutProps
 */

import type { BoxProps } from '@glyphink/website/theme'
import type TestSubject from '../Layout.props.mts'

describe('unit-d:theme/components/atoms/LayoutProps', () => {
  it('should extend BoxProps', () => {
    expectTypeOf<TestSubject>().toExtend<BoxProps>()
  })
})
