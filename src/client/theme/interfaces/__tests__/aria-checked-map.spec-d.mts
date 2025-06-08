/**
 * @file Type Tests - AriaCheckedMap
 * @module website/theme/interfaces/tests/unit-d/AriaCheckedMap
 */

import type { RequiredKeys } from '@flex-development/tutils'
import type { Booleanish } from '@glyphink/website/theme'
import type TestSubject from '../aria-checked-map.mts'

describe('unit-d:theme/interfaces/AriaCheckedMap', () => {
  it('should have all required keys', () => {
    expectTypeOf<keyof TestSubject>().toEqualTypeOf<RequiredKeys<TestSubject>>()
  })

  it('should match [booleanish: Booleanish]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('booleanish')
      .toEqualTypeOf<Booleanish>()
  })

  it('should match [mixed: "mixed"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('mixed')
      .toEqualTypeOf<'mixed'>()
  })
})
