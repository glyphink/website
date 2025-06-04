/**
 * @file Type Tests - SvgElements
 * @module website/theme/interfaces/tests/unit-d/SvgElements
 */

import type { RequiredKeys } from '@flex-development/tutils'
import type TestSubject from '../svg-elements.mts'

describe.todo('unit-d:theme/interfaces/SvgElements', () => {
  it('should have all required keys', () => {
    expectTypeOf<RequiredKeys<TestSubject>>().toEqualTypeOf<keyof TestSubject>()
  })
})
