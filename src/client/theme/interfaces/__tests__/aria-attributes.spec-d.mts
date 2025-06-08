/**
 * @file Type Tests - AriaAttributes
 * @module website/theme/interfaces/tests/unit-d/AriaAttributes
 */

import type { OptionalKeys } from '@flex-development/tutils'
import * as react from 'react'
import type TestSubject from '../aria-attributes.mts'

describe('unit-d:theme/interfaces/AriaAttributes', () => {
  it('should have all optional keys', () => {
    expectTypeOf<keyof TestSubject>().toEqualTypeOf<OptionalKeys<TestSubject>>()
  })

  it('should match react.AriaAttributes', () => {
    expectTypeOf<Required<TestSubject>>()
      .toExtend<Required<react.AriaAttributes>>()
  })
})
