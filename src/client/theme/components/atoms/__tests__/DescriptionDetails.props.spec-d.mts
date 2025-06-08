/**
 * @file Type Tests - DescriptionDetailsProps
 * @module website/theme/components/atoms/tests/unit-d/DescriptionDetailsProps
 */

import type { GlobalAttributes } from '@glyphink/website/theme'
import type TestSubject from '../DescriptionDetails.props.mts'

describe('unit-d:theme/components/atoms/DescriptionDetailsProps', () => {
  it('should extend GlobalAttributes<HTMLElement>', () => {
    expectTypeOf<TestSubject>().toExtend<GlobalAttributes<HTMLElement>>()
  })
})
