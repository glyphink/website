/**
 * @file Type Tests - ContentProps
 * @module website/theme/components/tests/unit-d/ContentProps
 */

import type { BoxProps } from '@glyphink/website/theme'
import type TestSubject from '../Content.props.mts'

describe('unit-d:theme/components/ContentProps', () => {
  it('should extend BoxProps', () => {
    expectTypeOf<TestSubject>().toExtend<BoxProps>()
  })

  it('should match [id?: undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('id')
      .toEqualTypeOf<undefined>()
  })
})
