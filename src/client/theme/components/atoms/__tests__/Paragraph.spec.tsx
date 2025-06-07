/**
 * @file Unit Tests - Paragraph
 * @module website/theme/components/atoms/tests/unit/Paragraph
 */

import SAMPLE_TEXT from '#fixtures/sample-text'
import render from '#tests/utils/render'
import type { ParagraphProps } from '@glyphink/website/theme'
import TestSubject from '../Paragraph.tsx'

describe('unit:theme/components/atoms/Paragraph', () => {
  it('should render <p>', () => {
    // Arrange
    const props: ParagraphProps = { children: SAMPLE_TEXT }

    // Act
    const { container } = render(<TestSubject {...props} />)

    // Expect
    expect(container.firstChild).to.have.tagName('p')
    expect(container.firstChild).toMatchSnapshot()
  })
})
