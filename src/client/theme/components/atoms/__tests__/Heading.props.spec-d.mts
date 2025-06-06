/**
 * @file Type Tests - HeadingProps
 * @module website/theme/components/atoms/tests/unit-d/HeadingProps
 */

import type { GlobalAttributes, HeadingSize } from '@glyphink/website/theme'
import type TestSubject from '../Heading.props.mts'

describe('unit-d:theme/components/atoms/HeadingProps', () => {
  it('should extend GlobalAttributes<HTMLHeadingElement>', () => {
    expectTypeOf<TestSubject>().toExtend<GlobalAttributes<HTMLHeadingElement>>()
  })

  it('should match [size: HeadingSize]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('size')
      .toEqualTypeOf<HeadingSize>()
  })
})
