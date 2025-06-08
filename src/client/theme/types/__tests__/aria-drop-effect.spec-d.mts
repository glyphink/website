/**
 * @file Type Tests - AriaDropEffect
 * @module website/theme/types/tests/unit-d/AriaDropEffect
 */

import type { AriaDropEffectMap } from '@glyphink/website/theme'
import type TestSubject from '../aria-drop-effect.mts'

describe('unit-d:theme/types/AriaDropEffect', () => {
  it('should equal AriaDropEffectMap[keyof AriaDropEffectMap]', () => {
    // Arrange
    type Expect = AriaDropEffectMap[keyof AriaDropEffectMap]

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
