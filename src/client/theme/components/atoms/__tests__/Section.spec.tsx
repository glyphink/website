/**
 * @file Unit Tests - Section
 * @module website/theme/components/atoms/tests/unit/Section
 */

import render from '#tests/utils/render'
import TestSubject from '../Section.tsx'

describe('unit:theme/components/atoms/Section', () => {
  it('should render <section>', () => {
    // Act
    const { container } = render(<TestSubject />)

    // Expect
    expect(container.firstChild).to.have.tagName('section')
    expect(container.firstChild).toMatchSnapshot()
  })
})
