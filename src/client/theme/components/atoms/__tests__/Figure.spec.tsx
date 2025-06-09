/**
 * @file Unit Tests - Figure
 * @module website/theme/components/atoms/tests/unit/Figure
 */

import render from '#tests/utils/render'
import TestSubject from '../Figure.tsx'

describe('unit:theme/components/atoms/Figure', () => {
  it('should render <figure>', () => {
    // Act
    const { container } = render(<TestSubject />)

    // Expect
    expect(container.firstChild).to.have.tagName('figure')
    expect(container.firstChild).toMatchSnapshot()
  })
})
