/**
 * @file Unit Tests - ThematicBreak
 * @module website/theme/components/atoms/tests/unit/ThematicBreak
 */

import render from '#tests/utils/render'
import TestSubject from '../ThematicBreak.tsx'

describe('unit:theme/components/atoms/ThematicBreak', () => {
  it('should render <hr>', () => {
    // Act
    const { container } = render(<TestSubject />)

    // Expect
    expect(container.firstChild).to.have.tagName('hr')
    expect(container.firstChild).toMatchSnapshot()
  })
})
