/**
 * @file Type Tests - AriaPressedMap
 * @module website/theme/interfaces/tests/unit-d/AriaPressedMap
 */

import type { RequiredKeys } from '@flex-development/tutils'
import type { Booleanish } from '@glyphink/website/theme'
import type TestSubject from '../aria-pressed-map.mts'

describe('unit-d:theme/interfaces/AriaPressedMap', () => {
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
