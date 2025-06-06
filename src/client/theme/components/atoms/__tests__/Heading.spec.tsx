/**
 * @file Unit Tests - Heading
 * @module website/theme/components/atoms/tests/unit/Heading
 */

import render from '#tests/utils/render'
import type { HeadingProps, HeadingSize } from '@glyphink/website/theme'
import TestSubject from '../Heading.tsx'

describe('unit:theme/components/atoms/Heading', () => {
  it.each<HeadingSize>([
    1,
    2,
    3,
    4,
    5,
    6
  ])('should render heading element (<h%j>)', size => {
    // Arrange
    const props: HeadingProps = { children: `heading ${size}`, size }

    // Act
    const { container } = render(<TestSubject {...props} />)

    // Expect
    expect(container.firstChild).to.have.tagName('h' + props.size)
    expect(container.firstChild).toMatchSnapshot()
  })
})
