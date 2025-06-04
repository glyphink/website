/**
 * @file Unit Tests - Layout
 * @module website/theme/components/atoms/tests/unit/Layout
 */

import render from '#tests/utils/render'
import TestSubject from '../Layout.tsx'

describe('unit:theme/components/atoms/Layout', () => {
  it('should render <div>', () => {
    // Act
    const { container } = render(<TestSubject />)

    // Expect
    expect(container.firstChild).to.have.tagName('div')
    expect(container.firstChild).toMatchSnapshot()
  })
})
