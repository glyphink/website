/**
 * @file Unit Tests - Header
 * @module website/theme/components/atoms/tests/unit/Header
 */

import render from '#tests/utils/render'
import TestSubject from '../Header.tsx'

describe('unit:theme/components/atoms/Header', () => {
  it('should render <header>', () => {
    // Act
    const { container } = render(<TestSubject />)

    // Expect
    expect(container.firstChild).to.have.tagName('header')
    expect(container.firstChild).toMatchSnapshot()
  })
})
