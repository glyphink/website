/**
 * @file Type Tests - Booleanish
 * @module website/theme/types/tests/unit-d/Booleanish
 */

import type TestSubject from '../booleanish.mts'

describe('unit-d:theme/types/Booleanish', () => {
  it('should extract `${boolean}`', () => {
    expectTypeOf<TestSubject>().extract<`${boolean}`>().not.toBeNever()
  })

  it('should extract boolean', () => {
    expectTypeOf<TestSubject>().extract<boolean>().not.toBeNever()
  })
})
