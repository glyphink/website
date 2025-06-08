/**
 * @file Type Tests - AriaLiveMap
 * @module website/theme/interfaces/tests/unit-d/AriaLiveMap
 */

import type { RequiredKeys } from '@flex-development/tutils'
import type TestSubject from '../aria-live-map.mts'

describe('unit-d:theme/interfaces/AriaLiveMap', () => {
  it('should have all required keys', () => {
    expectTypeOf<keyof TestSubject>().toEqualTypeOf<RequiredKeys<TestSubject>>()
  })

  it('should match [assertive: "assertive"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('assertive')
      .toEqualTypeOf<'assertive'>()
  })

  it('should match [off: "off"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('off').toEqualTypeOf<'off'>()
  })

  it('should match [polite: "polite"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('polite')
      .toEqualTypeOf<'polite'>()
  })
})
