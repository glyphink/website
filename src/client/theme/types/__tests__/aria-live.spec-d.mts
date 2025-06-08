/**
 * @file Type Tests - AriaLive
 * @module website/theme/types/tests/unit-d/AriaLive
 */

import type { AriaLiveMap } from '@glyphink/website/theme'
import type TestSubject from '../aria-live.mts'

describe('unit-d:theme/types/AriaLive', () => {
  it('should equal AriaLiveMap[keyof AriaLiveMap]', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<AriaLiveMap[keyof AriaLiveMap]>()
  })
})
