/**
 * @file Type Tests - SectionProps
 * @module website/theme/components/atoms/tests/unit-d/SectionProps
 */

import type { GlobalAttributes } from '@glyphink/website/theme'
import type TestSubject from '../Section.props.mts'

describe('unit-d:theme/components/atoms/SectionProps', () => {
  it('should extend GlobalAttributes<HTMLElement>', () => {
    expectTypeOf<TestSubject>().toExtend<GlobalAttributes<HTMLElement>>()
  })
})
