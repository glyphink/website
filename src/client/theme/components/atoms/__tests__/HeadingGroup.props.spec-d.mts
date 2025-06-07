/**
 * @file Type Tests - HeadingGroupProps
 * @module website/theme/components/atoms/tests/unit-d/HeadingGroupProps
 */

import type { GlobalAttributes } from '@glyphink/website/theme'
import type TestSubject from '../HeadingGroup.props.mts'

describe('unit-d:theme/components/atoms/HeadingGroupProps', () => {
  it('should extend GlobalAttributes<HTMLHeadingGroupElement>', () => {
    expectTypeOf<TestSubject>().toExtend<GlobalAttributes<HTMLElement>>()
  })
})
