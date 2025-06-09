/**
 * @file Type Tests - FigureProps
 * @module website/theme/components/atoms/tests/unit-d/FigureProps
 */

import type { GlobalAttributes } from '@glyphink/website/theme'
import type TestSubject from '../Figure.props.mts'

describe('unit-d:theme/components/atoms/FigureProps', () => {
  it('should extend GlobalAttributes<HTMLElement>', () => {
    expectTypeOf<TestSubject>().toExtend<GlobalAttributes<HTMLElement>>()
  })
})
