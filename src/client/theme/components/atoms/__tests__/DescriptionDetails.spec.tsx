/**
 * @file Unit Tests - DescriptionDetails
 * @module website/theme/components/atoms/tests/unit/DescriptionDetails
 */

import render from '#tests/utils/render'
import type DescriptionDetailsProps from '../DescriptionDetails.props.mts'
import TestSubject from '../DescriptionDetails.tsx'

describe('unit:theme/components/atoms/DescriptionDetails', () => {
  it('should render <dd>', () => {
    // Arrange
    const props: DescriptionDetailsProps = {
      children: 'A large feline inhabiting Bodmin Moor.'
    }

    // Act
    const { container } = render(<TestSubject {...props} />)

    // Expect
    expect(container.firstChild).to.have.tagName('dd')
    expect(container.firstChild).toMatchSnapshot()
  })
})
