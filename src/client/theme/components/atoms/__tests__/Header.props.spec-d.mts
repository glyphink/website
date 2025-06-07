/**
 * @file Type Tests - HeaderProps
 * @module website/theme/components/atoms/tests/unit-d/HeaderProps
 */

import type { GlobalAttributes } from '@glyphink/website/theme'
import type TestSubject from '../Header.props.mts'

describe('unit-d:theme/components/atoms/HeaderProps', () => {
  it('should extend GlobalAttributes<HTMLElement>', () => {
    expectTypeOf<TestSubject>().toExtend<GlobalAttributes<HTMLElement>>()
  })
})
