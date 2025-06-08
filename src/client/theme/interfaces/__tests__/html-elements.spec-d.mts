/**
 * @file Type Tests - HtmlElements
 * @module website/theme/interfaces/tests/unit-d/HtmlElements
 */

import type { RequiredKeys } from '@flex-development/tutils'
import type { SvgElements } from '@glyphink/website/theme'
import type TestSubject from '../html-elements.mts'

describe('unit-d:theme/interfaces/HtmlElements', () => {
  it('should extend SvgElements', () => {
    expectTypeOf<TestSubject>().toExtend<SvgElements>()
  })

  it('should have all required keys', () => {
    expectTypeOf<RequiredKeys<TestSubject>>().toEqualTypeOf<keyof TestSubject>()
  })

  it('should match [a: HTMLAnchorElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('a')
      .toEqualTypeOf<HTMLAnchorElement>()
  })

  it('should match [abbr: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('abbr')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [address: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('address')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [area: HTMLAreaElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('area')
      .toEqualTypeOf<HTMLAreaElement>()
  })

  it('should match [article: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('article')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [aside: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('aside')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [audio: HTMLAudioElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('audio')
      .toEqualTypeOf<HTMLAudioElement>()
  })

  it('should match [b: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('b')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [base: HTMLBaseElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('base')
      .toEqualTypeOf<HTMLBaseElement>()
  })

  it('should match [bdi: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('bdi')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [bdo: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('bdo')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [big: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('big')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [blockquote: HTMLQuoteElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('blockquote')
      .toEqualTypeOf<HTMLQuoteElement>()
  })

  it('should match [body: HTMLBodyElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('body')
      .toEqualTypeOf<HTMLBodyElement>()
  })

  it('should match [br: HTMLBRElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('br')
      .toEqualTypeOf<HTMLBRElement>()
  })

  it('should match [button: HTMLButtonElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('button')
      .toEqualTypeOf<HTMLButtonElement>()
  })

  it('should match [canvas: HTMLCanvasElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('canvas')
      .toEqualTypeOf<HTMLCanvasElement>()
  })

  it('should match [caption: HTMLTableCaptionElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('caption')
      .toEqualTypeOf<HTMLTableCaptionElement>()
  })

  it('should match [cite: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('cite')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [code: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('code')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [col: HTMLTableColElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('col')
      .toEqualTypeOf<HTMLTableColElement>()
  })

  it('should match [colgroup: HTMLTableColElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('colgroup')
      .toEqualTypeOf<HTMLTableColElement>()
  })

  it('should match [data: HTMLDataElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('data')
      .toEqualTypeOf<HTMLDataElement>()
  })

  it('should match [datalist: HTMLDataListElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('datalist')
      .toEqualTypeOf<HTMLDataListElement>()
  })

  it('should match [dd: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('dd')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [del: HTMLModElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('del')
      .toEqualTypeOf<HTMLModElement>()
  })

  it('should match [details: HTMLDetailsElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('details')
      .toEqualTypeOf<HTMLDetailsElement>()
  })

  it('should match [dfn: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('dfn')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [dialog: HTMLDialogElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('dialog')
      .toEqualTypeOf<HTMLDialogElement>()
  })

  it('should match [div: HTMLDivElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('div')
      .toEqualTypeOf<HTMLDivElement>()
  })

  it('should match [dl: HTMLDListElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('dl')
      .toEqualTypeOf<HTMLDListElement>()
  })

  it('should match [dt: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('dt')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [em: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('em')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [embed: HTMLEmbedElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('embed')
      .toEqualTypeOf<HTMLEmbedElement>()
  })

  it('should match [fieldset: HTMLFieldSetElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('fieldset')
      .toEqualTypeOf<HTMLFieldSetElement>()
  })

  it('should match [figcaption: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('figcaption')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [figure: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('figure')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [footer: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('footer')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [form: HTMLFormElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('form')
      .toEqualTypeOf<HTMLFormElement>()
  })

  it('should match [h1: HTMLHeadingElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('h1')
      .toEqualTypeOf<HTMLHeadingElement>()
  })

  it('should match [h2: HTMLHeadingElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('h2')
      .toEqualTypeOf<HTMLHeadingElement>()
  })

  it('should match [h3: HTMLHeadingElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('h3')
      .toEqualTypeOf<HTMLHeadingElement>()
  })

  it('should match [h4: HTMLHeadingElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('h4')
      .toEqualTypeOf<HTMLHeadingElement>()
  })

  it('should match [h5: HTMLHeadingElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('h5')
      .toEqualTypeOf<HTMLHeadingElement>()
  })

  it('should match [h6: HTMLHeadingElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('h6')
      .toEqualTypeOf<HTMLHeadingElement>()
  })

  it('should match [head: HTMLHeadElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('head')
      .toEqualTypeOf<HTMLHeadElement>()
  })

  it('should match [header: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('header')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [hgroup: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('hgroup')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [hr: HTMLHRElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('hr')
      .toEqualTypeOf<HTMLHRElement>()
  })

  it('should match [html: HTMLHtmlElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('html')
      .toEqualTypeOf<HTMLHtmlElement>()
  })

  it('should match [i: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('i')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [iframe: HTMLIFrameElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('iframe')
      .toEqualTypeOf<HTMLIFrameElement>()
  })

  it('should match [img: HTMLImageElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('img')
      .toEqualTypeOf<HTMLImageElement>()
  })

  it('should match [input: HTMLInputElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('input')
      .toEqualTypeOf<HTMLInputElement>()
  })

  it('should match [ins: HTMLModElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('ins')
      .toEqualTypeOf<HTMLModElement>()
  })

  it('should match [kbd: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('kbd')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [label: HTMLLabelElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('label')
      .toEqualTypeOf<HTMLLabelElement>()
  })

  it('should match [legend: HTMLLegendElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('legend')
      .toEqualTypeOf<HTMLLegendElement>()
  })

  it('should match [li: HTMLLIElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('li')
      .toEqualTypeOf<HTMLLIElement>()
  })

  it('should match [link: HTMLLinkElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('link')
      .toEqualTypeOf<HTMLLinkElement>()
  })

  it('should match [main: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('main')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [map: HTMLMapElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('map')
      .toEqualTypeOf<HTMLMapElement>()
  })

  it('should match [mark: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('mark')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [meta: HTMLMetaElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('meta')
      .toEqualTypeOf<HTMLMetaElement>()
  })

  it('should match [meter: HTMLMeterElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('meter')
      .toEqualTypeOf<HTMLMeterElement>()
  })

  it('should match [nav: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('nav')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [noscript: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('noscript')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [object: HTMLObjectElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('object')
      .toEqualTypeOf<HTMLObjectElement>()
  })

  it('should match [ol: HTMLOListElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('ol')
      .toEqualTypeOf<HTMLOListElement>()
  })

  it('should match [optgroup: HTMLOptGroupElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('optgroup')
      .toEqualTypeOf<HTMLOptGroupElement>()
  })

  it('should match [option: HTMLOptionElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('option')
      .toEqualTypeOf<HTMLOptionElement>()
  })

  it('should match [output: HTMLOutputElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('output')
      .toEqualTypeOf<HTMLOutputElement>()
  })

  it('should match [p: HTMLParagraphElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('p')
      .toEqualTypeOf<HTMLParagraphElement>()
  })

  it('should match [param: HTMLParamElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('param')
      .toEqualTypeOf<HTMLParamElement>()
  })

  it('should match [picture: HTMLPictureElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('picture')
      .toEqualTypeOf<HTMLPictureElement>()
  })

  it('should match [pre: HTMLPreElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('pre')
      .toEqualTypeOf<HTMLPreElement>()
  })

  it('should match [progress: HTMLProgressElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('progress')
      .toEqualTypeOf<HTMLProgressElement>()
  })

  it('should match [q: HTMLQuoteElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('q')
      .toEqualTypeOf<HTMLQuoteElement>()
  })

  it('should match [rp: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('rp')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [rt: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('rt')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [ruby: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('ruby')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [s: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('s')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [samp: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('samp')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [script: HTMLScriptElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('script')
      .toEqualTypeOf<HTMLScriptElement>()
  })

  it('should match [section: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('section')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [select: HTMLSelectElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('select')
      .toEqualTypeOf<HTMLSelectElement>()
  })

  it('should match [slot: HTMLSlotElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('slot')
      .toEqualTypeOf<HTMLSlotElement>()
  })

  it('should match [small: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('small')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [source: HTMLSourceElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('source')
      .toEqualTypeOf<HTMLSourceElement>()
  })

  it('should match [span: HTMLSpanElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('span')
      .toEqualTypeOf<HTMLSpanElement>()
  })

  it('should match [strong: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('strong')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [style: HTMLStyleElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('style')
      .toEqualTypeOf<HTMLStyleElement>()
  })

  it('should match [sub: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('sub')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [summary: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('summary')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [sup: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('sup')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [table: HTMLTableElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('table')
      .toEqualTypeOf<HTMLTableElement>()
  })

  it('should match [tbody: HTMLTableSectionElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('tbody')
      .toEqualTypeOf<HTMLTableSectionElement>()
  })

  it('should match [td: HTMLTableCellElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('td')
      .toEqualTypeOf<HTMLTableCellElement>()
  })

  it('should match [template: HTMLTemplateElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('template')
      .toEqualTypeOf<HTMLTemplateElement>()
  })

  it('should match [textarea: HTMLTextAreaElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('textarea')
      .toEqualTypeOf<HTMLTextAreaElement>()
  })

  it('should match [tfoot: HTMLTableSectionElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('tfoot')
      .toEqualTypeOf<HTMLTableSectionElement>()
  })

  it('should match [th: HTMLTableCellElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('th')
      .toEqualTypeOf<HTMLTableCellElement>()
  })

  it('should match [thead: HTMLTableSectionElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('thead')
      .toEqualTypeOf<HTMLTableSectionElement>()
  })

  it('should match [time: HTMLTimeElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('time')
      .toEqualTypeOf<HTMLTimeElement>()
  })

  it('should match [title: HTMLTitleElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('title')
      .toEqualTypeOf<HTMLTitleElement>()
  })

  it('should match [tr: HTMLTableRowElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('tr')
      .toEqualTypeOf<HTMLTableRowElement>()
  })

  it('should match [track: HTMLTrackElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('track')
      .toEqualTypeOf<HTMLTrackElement>()
  })

  it('should match [u: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('u')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [ul: HTMLUListElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('ul')
      .toEqualTypeOf<HTMLUListElement>()
  })

  it('should match [var: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('var')
      .toEqualTypeOf<HTMLElement>()
  })

  it('should match [video: HTMLVideoElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('video')
      .toEqualTypeOf<HTMLVideoElement>()
  })

  it('should match [wbr: HTMLElement]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('wbr')
      .toEqualTypeOf<HTMLElement>()
  })
})
