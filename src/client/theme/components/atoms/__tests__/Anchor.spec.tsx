/**
 * @file Unit Tests - Anchor
 * @module website/theme/components/atoms/tests/unit/Anchor
 */

import render from '#tests/utils/render'
import type AnchorProps from '../Anchor.props.mts'
import TestSubject from '../Anchor.tsx'

describe('unit:theme/components/atoms/Anchor', () => {
  it('should render <a>', () => {
    // Arrange
    const props: AnchorProps = {
      children: '&lt;a&gt;: The Anchor element',
      href: 'https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a'
    }

    // Act
    const { container } = render(<TestSubject {...props} />)

    // Expect
    expect(container.firstChild).to.have.tagName('a')
    expect(container.firstChild).toMatchSnapshot()
  })
})
