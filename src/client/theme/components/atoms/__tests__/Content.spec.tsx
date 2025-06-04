/**
 * @file Unit Tests - Content
 * @module website/theme/components/atoms/tests/unit/Content
 */

import render from '#tests/utils/render'
import TestSubject from '../Content.tsx'

describe('unit:theme/components/atoms/Content', () => {
  it('should render <div>', () => {
    // Act
    const { container } = render(<TestSubject />)

    // Expect
    expect(container.firstChild).to.have.tagName('div')
    expect(container.firstChild).toMatchSnapshot()
  })
})
