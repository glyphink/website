/**
 * @file Type Tests - DescriptionListProps
 * @module website/theme/components/atoms/tests/unit-d/DescriptionListProps
 */

import type { GlobalAttributes } from '@glyphink/website/theme'
import type TestSubject from '../DescriptionList.props.mts'

describe('unit-d:theme/components/atoms/DescriptionListProps', () => {
  it('should extend GlobalAttributes<HTMLDListElement>', () => {
    expectTypeOf<TestSubject>().toExtend<GlobalAttributes<HTMLDListElement>>()
  })
})
