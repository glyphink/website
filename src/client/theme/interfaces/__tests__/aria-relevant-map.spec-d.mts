/**
 * @file Type Tests - AriaRelevantMap
 * @module website/theme/interfaces/tests/unit-d/AriaRelevantMap
 */

import type { RequiredKeys } from '@flex-development/tutils'
import type TestSubject from '../aria-relevant-map.mts'

describe('unit-d:theme/interfaces/AriaRelevantMap', () => {
  it('should have all required keys', () => {
    expectTypeOf<keyof TestSubject>().toEqualTypeOf<RequiredKeys<TestSubject>>()
  })

  it('should match [additions: "additions"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('additions')
      .toEqualTypeOf<'additions'>()
  })

  it('should match [additions_removals: "additions removals"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('additions_removals')
      .toEqualTypeOf<'additions removals'>()
  })

  it('should match [additions_text: "additions text"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('additions_text')
      .toEqualTypeOf<'additions text'>()
  })

  it('should match [all: "all"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('all').toEqualTypeOf<'all'>()
  })

  it('should match [removals: "removals"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('removals')
      .toEqualTypeOf<'removals'>()
  })

  it('should match [removals_additions: "removals additions"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('removals_additions')
      .toEqualTypeOf<'removals additions'>()
  })

  it('should match [removals_text: "removals text"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('removals_text')
      .toEqualTypeOf<'removals text'>()
  })

  it('should match [text: "text"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('text').toEqualTypeOf<'text'>()
  })

  it('should match [text_additions: "text additions"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('text_additions')
      .toEqualTypeOf<'text additions'>()
  })

  it('should match [text_removals: "text removals"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('text_removals')
      .toEqualTypeOf<'text removals'>()
  })
})
