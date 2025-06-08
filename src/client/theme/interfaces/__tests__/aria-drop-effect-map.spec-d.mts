/**
 * @file Type Tests - AriaDropEffectMap
 * @module website/theme/interfaces/tests/unit-d/AriaDropEffectMap
 */

import type { RequiredKeys } from '@flex-development/tutils'
import type TestSubject from '../aria-drop-effect-map.mts'

describe('unit-d:theme/interfaces/AriaDropEffectMap', () => {
  it('should have all required keys', () => {
    expectTypeOf<keyof TestSubject>().toEqualTypeOf<RequiredKeys<TestSubject>>()
  })

  it('should match [copy: "copy"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('copy').toEqualTypeOf<'copy'>()
  })

  it('should match [execute: "execute"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('execute')
      .toEqualTypeOf<'execute'>()
  })

  it('should match [link: "link"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('link').toEqualTypeOf<'link'>()
  })

  it('should match [move: "move"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('move').toEqualTypeOf<'move'>()
  })

  it('should match [none: "none"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('none').toEqualTypeOf<'none'>()
  })

  it('should match [popup: "popup"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('popup')
      .toEqualTypeOf<'popup'>()
  })
})
