/**
 * @file Type Tests - AriaHasPopup
 * @module website/theme/types/tests/unit-d/AriaHasPopup
 */

import type { AriaHasPopupMap } from '@glyphink/website/theme'
import type TestSubject from '../aria-has-popup.mts'

describe('unit-d:theme/types/AriaHasPopup', () => {
  it('should equal AriaHasPopupMap[keyof AriaHasPopupMap]', () => {
    // Arrange
    type Expect = AriaHasPopupMap[keyof AriaHasPopupMap]

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
