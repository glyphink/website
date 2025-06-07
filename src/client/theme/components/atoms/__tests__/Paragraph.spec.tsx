/**
 * @file Unit Tests - Paragraph
 * @module website/theme/components/atoms/tests/unit/Paragraph
 */

import render from '#tests/utils/render'
import type { ParagraphProps } from '@glyphink/website/theme'
import TestSubject from '../Paragraph.tsx'

describe('unit:theme/components/atoms/Paragraph', () => {
  it('should render <p>', () => {
    // Arrange
    const props: ParagraphProps = {
      children: 'the quick brown fox jumped over the lazy dog'
    }

    // Act
    const { container } = render(<TestSubject {...props} />)

    // Expect
    expect(container.firstChild).to.have.tagName('p')
    expect(container.firstChild).toMatchSnapshot()
  })
})
