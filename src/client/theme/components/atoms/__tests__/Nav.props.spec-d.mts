/**
 * @file Type Tests - NavProps
 * @module website/theme/components/atoms/tests/unit-d/NavProps
 */

import type { GlobalAttributes } from '@glyphink/website/theme'
import type TestSubject from '../Nav.props.mts'

describe('unit-d:theme/components/atoms/NavProps', () => {
  it('should extend GlobalAttributes<HTMLElement>', () => {
    expectTypeOf<TestSubject>().toExtend<GlobalAttributes<HTMLElement>>()
  })
})
