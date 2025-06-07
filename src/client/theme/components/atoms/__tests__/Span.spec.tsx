/**
 * @file Unit Tests - Span
 * @module website/theme/components/atoms/tests/unit/Span
 */

import SAMPLE_TEXT from '#fixtures/sample-text'
import render from '#tests/utils/render'
import type { SpanProps } from '@glyphink/website/theme'
import TestSubject from '../Span.tsx'

describe('unit:theme/components/atoms/Span', () => {
  it('should render <span>', () => {
    // Arrange
    const props: SpanProps = { children: SAMPLE_TEXT }

    // Act
    const { container } = render(<TestSubject {...props} />)

    // Expect
    expect(container.firstChild).to.have.tagName('span')
    expect(container.firstChild).toMatchSnapshot()
  })
})
