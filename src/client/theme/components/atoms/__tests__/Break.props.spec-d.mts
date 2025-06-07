/**
 * @file Type Tests - BreakProps
 * @module website/theme/components/atoms/tests/unit-d/BreakProps
 */

import type { OptionalKeys } from '@flex-development/tutils'
import type { GlobalAttributes } from '@glyphink/website/theme'
import type TestSubject from '../Break.props.mts'

describe('unit-d:theme/components/atoms/BreakProps', () => {
  type OK = OptionalKeys<TestSubject>

  it('should extend GlobalAttributes<HTMLBRElement>', () => {
    expectTypeOf<TestSubject>().toExtend<GlobalAttributes<HTMLBRElement>>()
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
