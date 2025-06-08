/**
 * @file Type Tests - DescriptionTermProps
 * @module website/theme/components/atoms/tests/unit-d/DescriptionTermProps
 */

import type { GlobalAttributes } from '@glyphink/website/theme'
import type TestSubject from '../DescriptionTerm.props.mts'

describe('unit-d:theme/components/atoms/DescriptionTermProps', () => {
  it('should extend GlobalAttributes<HTMLElement>', () => {
    expectTypeOf<TestSubject>().toExtend<GlobalAttributes<HTMLElement>>()
  })
})
