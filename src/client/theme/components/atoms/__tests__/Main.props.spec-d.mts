/**
 * @file Type Tests - MainProps
 * @module website/theme/components/atoms/tests/unit-d/MainProps
 */

import type { GlobalAttributes } from '@glyphink/website/theme'
import type TestSubject from '../Main.props.mts'

describe('unit-d:theme/components/atoms/MainProps', () => {
  it('should extend GlobalAttributes<HTMLElement>', () => {
    expectTypeOf<TestSubject>().toExtend<GlobalAttributes<HTMLElement>>()
  })
})
