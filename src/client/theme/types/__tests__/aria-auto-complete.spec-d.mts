/**
 * @file Type Tests - AriaAutoComplete
 * @module website/theme/types/tests/unit-d/AriaAutoComplete
 */

import type { AriaAutoCompleteMap } from '@glyphink/website/theme'
import type TestSubject from '../aria-auto-complete.mts'

describe('unit-d:theme/types/AriaAutoComplete', () => {
  it('should equal AriaAutoCompleteMap[keyof AriaAutoCompleteMap]', () => {
    // Arrange
    type Expect = AriaAutoCompleteMap[keyof AriaAutoCompleteMap]

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
