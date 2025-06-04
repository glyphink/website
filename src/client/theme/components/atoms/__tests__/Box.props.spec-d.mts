/**
 * @file Type Tests - BoxProps
 * @module website/theme/components/atoms/tests/unit-d/BoxProps
 */

import type { GlobalAttributes } from '@glyphink/website/theme'
import type TestSubject from '../Box.props.mts'

describe('unit-d:theme/components/atoms/BoxProps', () => {
  it('should extend GlobalAttributes<HTMLDivElement>', () => {
    expectTypeOf<TestSubject>().toExtend<GlobalAttributes<HTMLDivElement>>()
  })
})
