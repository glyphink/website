/**
 * @file Type Tests - AriaRelevant
 * @module website/theme/types/tests/unit-d/AriaRelevant
 */

import type { AriaRelevantMap } from '@glyphink/website/theme'
import type TestSubject from '../aria-relevant.mts'

describe('unit-d:theme/types/AriaRelevant', () => {
  it('should equal AriaRelevantMap[keyof AriaRelevantMap]', () => {
    // Arrange
    type Expect = AriaRelevantMap[keyof AriaRelevantMap]

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
