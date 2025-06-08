/**
 * @file Type Tests - GlobalAttributes
 * @module website/theme/interfaces/tests/unit-d/GlobalAttributes
 */

import type { JsonPrimitive, Optional } from '@flex-development/tutils'
import type {
  AriaAttributes,
  AriaRole,
  AutoCapitalize,
  Element,
  EnterKeyHint,
  HtmlElements,
  InputMode
} from '@glyphink/website/theme'
import type { DOMAttributes, RefAttributes } from 'react'
import type TestSubject from '../global-attributes.mts'

describe('unit-d:theme/interfaces/GlobalAttributes', () => {
  it('should extend AriaAttributes', () => {
    expectTypeOf<TestSubject>().toExtend<AriaAttributes>()
  })

  it('should extend DOMAttributes<E>', () => {
    expectTypeOf<TestSubject>().toExtend<DOMAttributes<Element>>()
  })

  it('should extend RefAttributes<E>', () => {
    expectTypeOf<TestSubject>().toExtend<RefAttributes<Element>>()
  })

  it('should match [[key: `data-${string}`]: JsonPrimitive | undefined]', () => {
    expectTypeOf<Required<TestSubject>>()
      .toHaveProperty<`data-${string}`>('data-key')
      .toEqualTypeOf<Optional<JsonPrimitive>>()
  })

  it('should match [autoCapitalize?: AutoCapitalize | undefined]', () => {
    expectTypeOf<Required<TestSubject>>()
      .toHaveProperty('autoCapitalize')
      .toEqualTypeOf<Optional<AutoCapitalize>>()
  })

  it('should match [enterKeyHint?: EnterKeyHint | undefined]', () => {
    expectTypeOf<Required<TestSubject>>()
      .toHaveProperty('enterKeyHint')
      .toEqualTypeOf<Optional<EnterKeyHint>>()
  })

  it('should match [inputMode?: InputMode | undefined]', () => {
    expectTypeOf<Required<TestSubject>>()
      .toHaveProperty('inputMode')
      .toEqualTypeOf<Optional<InputMode>>()
  })

  it('should match [is?: keyof HtmlElements | undefined]', () => {
    expectTypeOf<Required<TestSubject>>()
      .toHaveProperty('is')
      .toEqualTypeOf<Optional<keyof HtmlElements>>()
  })

  it('should match [role?: AriaRole | undefined]', () => {
    expectTypeOf<Required<TestSubject>>()
      .toHaveProperty('role')
      .toEqualTypeOf<Optional<AriaRole>>()
  })
})
