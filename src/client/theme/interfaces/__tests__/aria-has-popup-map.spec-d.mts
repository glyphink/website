/**
 * @file Type Tests - AriaHasPopupMap
 * @module website/theme/interfaces/tests/unit-d/AriaHasPopupMap
 */

import type { RequiredKeys } from '@flex-development/tutils'
import type { Booleanish } from '@glyphink/website/theme'
import type TestSubject from '../aria-has-popup-map.mts'

describe('unit-d:theme/interfaces/AriaHasPopupMap', () => {
  it('should have all required keys', () => {
    expectTypeOf<keyof TestSubject>().toEqualTypeOf<RequiredKeys<TestSubject>>()
  })

  it('should match [booleanish: Booleanish]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('booleanish')
      .toEqualTypeOf<Booleanish>()
  })

  it('should match [dialog: "dialog"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('dialog')
      .toEqualTypeOf<'dialog'>()
  })

  it('should match [grid: "grid"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('grid').toEqualTypeOf<'grid'>()
  })

  it('should match [listbox: "listbox"]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('listbox')
      .toEqualTypeOf<'listbox'>()
  })

  it('should match [menu: "menu"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('menu').toEqualTypeOf<'menu'>()
  })

  it('should match [tree: "tree"]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('tree').toEqualTypeOf<'tree'>()
  })
})
