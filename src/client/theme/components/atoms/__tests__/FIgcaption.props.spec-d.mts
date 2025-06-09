/**
 * @file Type Tests - FigcaptionProps
 * @module website/theme/components/atoms/tests/unit-d/FigcaptionProps
 */

import type { GlobalAttributes } from '@glyphink/website/theme'
import type TestSubject from '../Figcaption.props.mts'

describe('unit-d:theme/components/atoms/FigcaptionProps', () => {
  it('should extend GlobalAttributes<HTMLElement>', () => {
    expectTypeOf<TestSubject>().toExtend<GlobalAttributes<HTMLElement>>()
  })
})
