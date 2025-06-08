/**
 * @file Type Tests - AriaCurrent
 * @module website/theme/types/tests/unit-d/AriaCurrent
 */

import type { AriaCurrentMap } from '@glyphink/website/theme'
import type TestSubject from '../aria-current.mts'

describe('unit-d:theme/types/AriaCurrent', () => {
  it('should equal AriaCurrentMap[keyof AriaCurrentMap]', () => {
    // Arrange
    type Expect = AriaCurrentMap[keyof AriaCurrentMap]

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
