/**
 * @file Type Tests - AriaSortMap
 * @module website/theme/interfaces/tests/unit-d/AriaSortMap
 */

import type { RequiredKeys } from '@flex-development/tutils'
import type TestSubject from '../aria-sort-map.mts'

describe('unit-d:theme/interfaces/AriaSortMap', () => {
  it('should have all required keys', () => {
    expectTypeOf<keyof TestSubject>().toEqualTypeOf<RequiredKeys<TestSubject>>()
  })

  it('should match [ascending: "ascending"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('ascending')
      .toEqualTypeOf<'ascending'>()
  })

  it('should match [descending: "descending"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('descending')
      .toEqualTypeOf<'descending'>()
  })

  it('should match [none: "none"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('none').toEqualTypeOf<'none'>()
  })

  it('should match [other: "other"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('other')
      .toEqualTypeOf<'other'>()
  })
})
