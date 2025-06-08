/**
 * @file Type Tests - AriaInvalidMap
 * @module website/theme/interfaces/tests/unit-d/AriaInvalidMap
 */

import type { RequiredKeys } from '@flex-development/tutils'
import type { Booleanish } from '@glyphink/website/theme'
import type TestSubject from '../aria-invalid-map.mts'

describe('unit-d:theme/interfaces/AriaInvalidMap', () => {
  it('should have all required keys', () => {
    expectTypeOf<keyof TestSubject>().toEqualTypeOf<RequiredKeys<TestSubject>>()
  })

  it('should match [booleanish: Booleanish]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('booleanish')
      .toEqualTypeOf<Booleanish>()
  })

  it('should match [grammar: "grammar"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('grammar')
      .toEqualTypeOf<'grammar'>()
  })

  it('should match [spelling: "spelling"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('spelling')
      .toEqualTypeOf<'spelling'>()
  })
})
