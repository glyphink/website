/**
 * @file Type Tests - AriaAutoCompleteMap
 * @module website/theme/interfaces/tests/unit-d/AriaAutoCompleteMap
 */

import type { RequiredKeys } from '@flex-development/tutils'
import type TestSubject from '../aria-auto-complete-map.mts'

describe('unit-d:theme/interfaces/AriaAutoCompleteMap', () => {
  it('should have all required keys', () => {
    expectTypeOf<keyof TestSubject>().toEqualTypeOf<RequiredKeys<TestSubject>>()
  })

  it('should match [both: "both"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('both').toEqualTypeOf<'both'>()
  })

  it('should match [inline: "inline"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('inline')
      .toEqualTypeOf<'inline'>()
  })

  it('should match [list: "list"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('list').toEqualTypeOf<'list'>()
  })

  it('should match [none: "none"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('none').toEqualTypeOf<'none'>()
  })
})
