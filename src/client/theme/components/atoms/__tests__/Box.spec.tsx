/**
 * @file Unit Tests - Box
 * @module website/theme/components/atoms/tests/unit/Box
 */

import render from '#tests/utils/render'
import TestSubject from '../Box.tsx'

describe('unit:theme/components/atoms/Box', () => {
  it('should render <div>', () => {
    // Act
    const { container } = render(<TestSubject />)

    // Expect
    expect(container.firstChild).to.have.tagName('div')
    expect(container.firstChild).toMatchSnapshot()
  })
})
