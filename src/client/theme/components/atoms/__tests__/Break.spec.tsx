/**
 * @file Unit Tests - Break
 * @module website/theme/components/atoms/tests/unit/Break
 */

import render from '#tests/utils/render'
import TestSubject from '../Break.tsx'

describe('unit:theme/components/atoms/Break', () => {
  it('should render <br>', () => {
    // Act
    const { container } = render(<TestSubject />)

    // Expect
    expect(container.firstChild).to.have.tagName('br')
    expect(container.firstChild).toMatchSnapshot()
  })
})
