/**
 * @file Type Tests - HtmlElements
 * @module website/theme/interfaces/tests/unit-d/HtmlElements
 */

import type { RequiredKeys } from '@flex-development/tutils'
import type { SvgElements } from '@glyphink/website/theme'
import type TestSubject from '../html-elements.mts'

describe.todo('unit-d:theme/interfaces/HtmlElements', () => {
  it('should extend SvgElements', () => {
    expectTypeOf<TestSubject>().toExtend<SvgElements>()
  })

  it('should have all required keys', () => {
    expectTypeOf<RequiredKeys<TestSubject>>().toEqualTypeOf<keyof TestSubject>()
  })
})
