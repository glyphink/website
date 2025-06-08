/**
 * @file Type Tests - AriaInvalid
 * @module website/theme/types/tests/unit-d/AriaInvalid
 */

import type { AriaInvalidMap } from '@glyphink/website/theme'
import type TestSubject from '../aria-invalid.mts'

describe('unit-d:theme/types/AriaInvalid', () => {
  it('should equal AriaInvalidMap[keyof AriaInvalidMap]', () => {
    // Arrange
    type Expect = AriaInvalidMap[keyof AriaInvalidMap]

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
