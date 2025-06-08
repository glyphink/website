/**
 * @file Unit Tests - DescriptionList
 * @module website/theme/components/atoms/tests/unit/DescriptionList
 */

import render from '#tests/utils/render'
import type DescriptionListProps from '../DescriptionList.props.mts'
import TestSubject from '../DescriptionList.tsx'

describe('unit:theme/components/atoms/DescriptionList', () => {
  it('should render <dl>', () => {
    // Arrange
    const props: DescriptionListProps = {
      children: (
        <>
          <dt>Beast of Bodmin</dt>
          <dd>A large feline inhabiting Bodmin Moor.</dd>

          <dt>Morgawr</dt>
          <dd>A sea serpent.</dd>

          <dt>Owlman</dt>
          <dd>A giant owl-like creature.</dd>
        </>
      )
    }

    // Act
    const { container } = render(<TestSubject {...props} />)

    // Expect
    expect(container.firstChild).to.have.tagName('dl')
    expect(container.firstChild).toMatchSnapshot()
  })
})
