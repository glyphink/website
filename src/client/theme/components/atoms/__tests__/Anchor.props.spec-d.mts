/**
 * @file Type Tests - AnchorProps
 * @module website/theme/components/atoms/tests/unit-d/AnchorProps
 */

import type { Optional, OptionalKeys } from '@flex-development/tutils'
import type { GlobalAttributes } from '@glyphink/website/theme'
import type { HTMLAttributeReferrerPolicy } from 'react'
import type TestSubject from '../Anchor.props.mts'

describe('unit-d:theme/components/atoms/AnchorProps', () => {
  type OK = OptionalKeys<TestSubject>

  it('should extend GlobalAttributes<HTMLAnchorElement>', () => {
    expectTypeOf<TestSubject>().toExtend<GlobalAttributes<HTMLAnchorElement>>()
  })

  it('should match [attributionSrc?: boolean | string | undefined]', () => {
    expectTypeOf<OK>().extract<'attributionSrc'>().not.toBeNever()
    expectTypeOf<TestSubject>()
      .toHaveProperty('attributionSrc')
      .toEqualTypeOf<Optional<boolean | string>>()
  })

  it('should match [charSet?: string | undefined]', () => {
    expectTypeOf<OK>().extract<'charSet'>().not.toBeNever()
    expectTypeOf<TestSubject>()
      .toHaveProperty('charSet')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [coords?: string | undefined]', () => {
    expectTypeOf<OK>().extract<'coords'>().not.toBeNever()
    expectTypeOf<TestSubject>()
      .toHaveProperty('coords')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [download?: any]', () => {
    expectTypeOf<OK>().extract<'download'>().not.toBeNever()
    expectTypeOf<TestSubject>().toHaveProperty('download').toEqualTypeOf<any>()
  })

  it('should match [href: string]', () => {
    expectTypeOf<TestSubject>().toHaveProperty('href').toEqualTypeOf<string>()
  })

  it('should match [hrefLang?: string | undefined]', () => {
    expectTypeOf<OK>().extract<'hrefLang'>().not.toBeNever()
    expectTypeOf<TestSubject>()
      .toHaveProperty('hrefLang')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [name?: string | undefined]', () => {
    expectTypeOf<OK>().extract<'name'>().not.toBeNever()
    expectTypeOf<TestSubject>()
      .toHaveProperty('name')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [ping?: string | undefined]', () => {
    expectTypeOf<OK>().extract<'ping'>().not.toBeNever()
    expectTypeOf<TestSubject>()
      .toHaveProperty('ping')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [referrerPolicy?: HTMLAttributeReferrerPolicy | undefined]', () => {
    expectTypeOf<OK>().extract<'referrerPolicy'>().not.toBeNever()
    expectTypeOf<TestSubject>()
      .toHaveProperty('referrerPolicy')
      .toEqualTypeOf<Optional<HTMLAttributeReferrerPolicy>>()
  })

  it('should match [rel?: string | undefined]', () => {
    expectTypeOf<OK>().extract<'rel'>().not.toBeNever()
    expectTypeOf<TestSubject>()
      .toHaveProperty('rel')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [rev?: string | undefined]', () => {
    expectTypeOf<OK>().extract<'rev'>().not.toBeNever()
    expectTypeOf<TestSubject>()
      .toHaveProperty('rev')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [shape?: string | undefined]', () => {
    expectTypeOf<OK>().extract<'shape'>().not.toBeNever()
    expectTypeOf<TestSubject>()
      .toHaveProperty('shape')
      .toEqualTypeOf<Optional<string>>()
  })

  it('should match [target?: "_blank" | "_parent" | "_self" | "_top" | "_unfencedTop" | undefined]', () => {
    // Arrange
    type Target = '_blank' | '_parent' | '_self' | '_top' | '_unfencedTop'

    // Expect
    expectTypeOf<OK>().extract<'target'>().not.toBeNever()
    expectTypeOf<TestSubject>()
      .toHaveProperty('target')
      .toEqualTypeOf<Optional<Target>>()
  })

  it('should match [type?: string | undefined]', () => {
    expectTypeOf<OK>().extract<'type'>().not.toBeNever()
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<Optional<string>>()
  })
})
