/**
 * @file Unit Tests - Nav
 * @module website/theme/components/atoms/tests/unit/Nav
 */

import render from '#tests/utils/render'
import TestSubject from '../Nav.tsx'

describe('unit:theme/components/atoms/Nav', () => {
  it('should render <nav>', () => {
    // Act
    const { container } = render(<TestSubject />)

    // Expect
    expect(container.firstChild).to.have.tagName('nav')
    expect(container.firstChild).toMatchSnapshot()
  })
})
