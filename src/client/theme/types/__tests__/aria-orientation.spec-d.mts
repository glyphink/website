/**
 * @file Type Tests - AriaOrientation
 * @module website/theme/types/tests/unit-d/AriaOrientation
 */

import type { AriaOrientationMap } from '@glyphink/website/theme'
import type TestSubject from '../aria-orientation.mts'

describe('unit-d:theme/types/AriaOrientation', () => {
  it('should equal AriaOrientationMap[keyof AriaOrientationMap]', () => {
    // Arrange
    type Expect = AriaOrientationMap[keyof AriaOrientationMap]

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
