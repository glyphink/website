/**
 * @file Type Tests - ParagraphProps
 * @module website/theme/components/atoms/tests/unit-d/ParagraphProps
 */

import type { GlobalAttributes } from '@glyphink/website/theme'
import type TestSubject from '../Paragraph.props.mts'

describe('unit-d:theme/components/atoms/ParagraphProps', () => {
  it('should extend GlobalAttributes<HTMLParagraphElement>', () => {
    expectTypeOf<TestSubject>()
      .toExtend<GlobalAttributes<HTMLParagraphElement>>()
  })
})
