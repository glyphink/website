/**
 * @file Type Tests - ThematicBreakProps
 * @module website/theme/components/atoms/tests/unit-d/ThematicBreakProps
 */

import type { OptionalKeys } from '@flex-development/tutils'
import type { GlobalAttributes } from '@glyphink/website/theme'
import type TestSubject from '../ThematicBreak.props.mts'

describe('unit-d:theme/components/atoms/ThematicBreakProps', () => {
  type OK = OptionalKeys<TestSubject>

  it('should extend GlobalAttributes<HTMLHRElement>', () => {
    expectTypeOf<TestSubject>().toExtend<GlobalAttributes<HTMLHRElement>>()
  })

  it('should match [children?: undefined]', () => {
    expectTypeOf<OK>().extract<'children'>().not.toBeNever()
    expectTypeOf<TestSubject>()
      .toHaveProperty('children')
      .toEqualTypeOf<undefined>()
  })

  it('should match [dangerouslySetInnerHTML?: undefined]', () => {
    expectTypeOf<OK>().extract<'dangerouslySetInnerHTML'>().not.toBeNever()
    expectTypeOf<TestSubject>()
      .toHaveProperty('dangerouslySetInnerHTML')
      .toEqualTypeOf<undefined>()
  })
})
