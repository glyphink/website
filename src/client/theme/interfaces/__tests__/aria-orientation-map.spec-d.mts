/**
 * @file Type Tests - AriaOrientationMap
 * @module website/theme/interfaces/tests/unit-d/AriaOrientationMap
 */

import type { RequiredKeys } from '@flex-development/tutils'
import type TestSubject from '../aria-orientation-map.mts'

describe('unit-d:theme/interfaces/AriaOrientationMap', () => {
  it('should have all required keys', () => {
    expectTypeOf<keyof TestSubject>().toEqualTypeOf<RequiredKeys<TestSubject>>()
  })

  it('should match [horizontal: "horizontal"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('horizontal')
      .toEqualTypeOf<'horizontal'>()
  })

  it('should match [vertical: "vertical"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('vertical')
      .toEqualTypeOf<'vertical'>()
  })
})
