/**
 * @file Unit Tests - Main
 * @module website/theme/components/atoms/tests/unit/Main
 */

import render from '#tests/utils/render'
import TestSubject from '../Main.tsx'

describe('unit:theme/components/atoms/Main', () => {
  it('should render <main>', () => {
    // Act
    const { container } = render(<TestSubject />)

    // Expect
    expect(container.firstChild).to.have.tagName('main')
    expect(container.firstChild).toMatchSnapshot()
  })
})
