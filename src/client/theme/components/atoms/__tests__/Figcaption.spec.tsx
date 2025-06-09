/**
 * @file Unit Tests - Figcaption
 * @module website/theme/components/atoms/tests/unit/Figcaption
 */

import render from '#tests/utils/render'
import TestSubject from '../Figcaption.tsx'

describe('unit:theme/components/atoms/Figcaption', () => {
  it('should render <figcaption>', () => {
    // Act
    const { container } = render(<TestSubject />)

    // Expect
    expect(container.firstChild).to.have.tagName('figcaption')
    expect(container.firstChild).toMatchSnapshot()
  })
})
