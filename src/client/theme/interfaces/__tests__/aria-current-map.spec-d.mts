/**
 * @file Type Tests - AriaCurrentMap
 * @module website/theme/interfaces/tests/unit-d/AriaCurrentMap
 */

import type { RequiredKeys } from '@flex-development/tutils'
import type { Booleanish } from '@glyphink/website/theme'
import type TestSubject from '../aria-current-map.mts'

describe('unit-d:theme/interfaces/AriaCurrentMap', () => {
  it('should have all required keys', () => {
    expectTypeOf<keyof TestSubject>().toEqualTypeOf<RequiredKeys<TestSubject>>()
  })

  it('should match [booleanish: Booleanish]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('booleanish')
      .toEqualTypeOf<Booleanish>()
  })

  it('should match [date: "date"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('date').toEqualTypeOf<'date'>()
  })

  it('should match [location: "location"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('location')
      .toEqualTypeOf<'location'>()
  })

  it('should match [page: "page"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('page').toEqualTypeOf<'page'>()
  })

  it('should match [step: "step"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('step').toEqualTypeOf<'step'>()
  })

  it('should match [time: "time"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('time').toEqualTypeOf<'time'>()
  })
})
