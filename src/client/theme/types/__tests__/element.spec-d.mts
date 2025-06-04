/**
 * @file Type Tests - Element
 * @module website/theme/types/tests/unit-d/Element
 */

import type { HtmlElements } from '@glyphink/website/theme'
import type TestSubject from '../element.mts'

describe('unit-d:theme/types/Element', () => {
  it('should equal HtmlElements[keyof HtmlElements]', () => {
    // Arrange
    type Expect = HtmlElements[keyof HtmlElements]

    // Expect
    expectTypeOf<TestSubject>().toEqualTypeOf<Expect>()
  })
})
