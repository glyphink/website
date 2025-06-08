/**
 * @file Type Tests - AriaChecked
 * @module website/theme/types/tests/unit-d/AriaChecked
 */

import type { AriaCheckedMap } from '@glyphink/website/theme'
import type TestSubject from '../aria-checked.mts'

describe('unit-d:theme/types/AriaChecked', () => {
  it('should equal AriaCheckedMap[keyof AriaCheckedMap]', () => {
    // Arrange
    type Expect = AriaCheckedMap[keyof AriaCheckedMap]

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
