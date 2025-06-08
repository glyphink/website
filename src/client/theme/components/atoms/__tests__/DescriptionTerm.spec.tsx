/**
 * @file Unit Tests - DescriptionTerm
 * @module website/theme/components/atoms/tests/unit/DescriptionTerm
 */

import render from '#tests/utils/render'
import type DescriptionTermProps from '../DescriptionTerm.props.mts'
import TestSubject from '../DescriptionTerm.tsx'

describe('unit:theme/components/atoms/DescriptionTerm', () => {
  it('should render <dt>', () => {
    // Arrange
    const props: DescriptionTermProps = { children: 'Beast of Bodmin' }

    // Act
    const { container } = render(<TestSubject {...props} />)

    // Expect
    expect(container.firstChild).to.have.tagName('dt')
    expect(container.firstChild).toMatchSnapshot()
  })
})
