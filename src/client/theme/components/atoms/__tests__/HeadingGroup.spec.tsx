/**
 * @file Unit Tests - HeadingGroup
 * @module website/theme/components/atoms/tests/unit/HeadingGroup
 */

import render from '#tests/utils/render'
import type { HeadingGroupProps } from '@glyphink/website/theme'
import TestSubject from '../HeadingGroup.tsx'

describe('unit:theme/components/atoms/HeadingGroup', () => {
  it('should render <hgroup>', () => {
    // Arrange
    const props: HeadingGroupProps = {
      children: (
        <>
          <h1>
            {'Hello, world '}
            <span aria-label='world emoji' role='img'>🌎</span>
            <span aria-label='wave emoji' role='img'>👋</span>
          </h1>
          <p>The quick brown fox jumped over the lazy dog</p>
        </>
      )
    }

    // Act
    const { container } = render(<TestSubject {...props} />)

    // Expect
    expect(container.firstChild).to.have.tagName('hgroup')
    expect(container.firstChild).toMatchSnapshot()
  })
})
