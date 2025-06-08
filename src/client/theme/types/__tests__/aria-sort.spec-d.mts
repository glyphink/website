/**
 * @file Type Tests - AriaSort
 * @module website/theme/types/tests/unit-d/AriaSort
 */

import type { AriaSortMap } from '@glyphink/website/theme'
import type TestSubject from '../aria-sort.mts'

describe('unit-d:theme/types/AriaSort', () => {
  it('should equal AriaSortMap[keyof AriaSortMap]', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<AriaSortMap[keyof AriaSortMap]>()
  })
})
