/**
 * @file Type Tests - AriaPressed
 * @module website/theme/types/tests/unit-d/AriaPressed
 */

import type { AriaPressedMap } from '@glyphink/website/theme'
import type TestSubject from '../aria-pressed.mts'

describe('unit-d:theme/types/AriaPressed', () => {
  it('should equal AriaPressedMap[keyof AriaPressedMap]', () => {
    // Arrange
    type Expect = AriaPressedMap[keyof AriaPressedMap]

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
