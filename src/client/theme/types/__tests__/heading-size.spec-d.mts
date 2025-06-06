/**
 * @file Type Tests - HeadingSize
 * @module website/theme/types/tests/unit-d/HeadingSize
 */

import type { NaturalRange } from '@flex-development/tutils'
import type TestSubject from '../heading-size.mts'

describe('unit-d:theme/types/HeadingSize', () => {
  it('should be union of numbers in the range [1,6]', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<NaturalRange<7, [never]>>()
  })
})
