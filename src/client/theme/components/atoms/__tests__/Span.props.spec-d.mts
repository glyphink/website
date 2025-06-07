/**
 * @file Type Tests - SpanProps
 * @module website/theme/components/atoms/tests/unit-d/SpanProps
 */

import type { GlobalAttributes } from '@glyphink/website/theme'
import type TestSubject from '../Span.props.mts'

describe('unit-d:theme/components/atoms/SpanProps', () => {
  it('should extend GlobalAttributes<HTMLSpanElement>', () => {
    expectTypeOf<TestSubject>()
      .toExtend<GlobalAttributes<HTMLSpanElement>>()
  })
})
