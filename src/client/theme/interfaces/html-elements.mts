/**
 * @file Interfaces - HtmlElements
 * @module website/theme/interfaces/HtmlElements
 */

import type { SvgElements } from '@glyphink/website/theme'

/**
 * Registry of HTML elements.
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements
 * @see {@linkcode SvgElements}
 *
 * @extends {SvgElements}
 */
interface HtmlElements extends SvgElements {
  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a
   * @see {@linkcode HTMLAnchorElement}
   */
  a: HTMLAnchorElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/abbr
   * @see {@linkcode HTMLElement}
   */
  abbr: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/address
   * @see {@linkcode HTMLElement}
   */
  address: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/area
   * @see {@linkcode HTMLAreaElement}
   */
  area: HTMLAreaElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/article
   * @see {@linkcode HTMLElement}
   */
  article: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/aside
   * @see {@linkcode HTMLElement}
   */
  aside: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/audio
   * @see {@linkcode HTMLAudioElement}
   */
  audio: HTMLAudioElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/b
   * @see {@linkcode HTMLElement}
   */
  b: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/base
   * @see {@linkcode HTMLBaseElement}
   */
  base: HTMLBaseElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdi
   * @see {@linkcode HTMLElement}
   */
  bdi: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/bdo
   * @see {@linkcode HTMLElement}
   */
  bdo: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/big
   * @see {@linkcode HTMLElement}
   */
  big: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/blockquote
   * @see {@linkcode HTMLQuoteElement}
   */
  blockquote: HTMLQuoteElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/body
   * @see {@linkcode HTMLBodyElement}
   */
  body: HTMLBodyElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/br
   * @see {@linkcode HTMLBRElement}
   */
  br: HTMLBRElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/button
   * @see {@linkcode HTMLButtonElement}
   */
  button: HTMLButtonElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/canvas
   * @see {@linkcode HTMLCanvasElement}
   */
  canvas: HTMLCanvasElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/caption
   * @see {@linkcode HTMLTableCaptionElement}
   */
  caption: HTMLTableCaptionElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/cite
   * @see {@linkcode HTMLElement}
   */
  cite: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/code
   * @see {@linkcode HTMLElement}
   */
  code: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/col
   * @see {@linkcode HTMLTableColElement}
   */
  col: HTMLTableColElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/colgroup
   * @see {@linkcode HTMLTableColElement}
   */
  colgroup: HTMLTableColElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/data
   * @see {@linkcode HTMLDataElement}
   */
  data: HTMLDataElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/datalist
   * @see {@linkcode HTMLDataListElement}
   */
  datalist: HTMLDataListElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dd
   * @see {@linkcode HTMLElement}
   */
  dd: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/del
   * @see {@linkcode HTMLModElement}
   */
  del: HTMLModElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/details
   * @see {@linkcode HTMLDetailsElement}
   */
  details: HTMLDetailsElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dfn
   * @see {@linkcode HTMLElement}
   */
  dfn: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dialog
   * @see {@linkcode HTMLDialogElement}
   */
  dialog: HTMLDialogElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/div
   * @see {@linkcode HTMLDivElement}
   */
  div: HTMLDivElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dl
   * @see {@linkcode HTMLDListElement}
   */
  dl: HTMLDListElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/dt
   * @see {@linkcode HTMLElement}
   */
  dt: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/em
   * @see {@linkcode HTMLElement}
   */
  em: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/embed
   * @see {@linkcode HTMLEmbedElement}
   */
  embed: HTMLEmbedElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/fieldset
   * @see {@linkcode HTMLFieldSetElement}
   */
  fieldset: HTMLFieldSetElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/figcaption
   * @see {@linkcode HTMLElement}
   */
  figcaption: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/figure
   * @see {@linkcode HTMLElement}
   */
  figure: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/footer
   * @see {@linkcode HTMLElement}
   */
  footer: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/form
   * @see {@linkcode HTMLFormElement}
   */
  form: HTMLFormElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/h1
   * @see {@linkcode HTMLHeadingElement}
   */
  h1: HTMLHeadingElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/h2
   * @see {@linkcode HTMLHeadingElement}
   */
  h2: HTMLHeadingElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/h3
   * @see {@linkcode HTMLHeadingElement}
   */
  h3: HTMLHeadingElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/h4
   * @see {@linkcode HTMLHeadingElement}
   */
  h4: HTMLHeadingElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/h5
   * @see {@linkcode HTMLHeadingElement}
   */
  h5: HTMLHeadingElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/h6
   * @see {@linkcode HTMLHeadingElement}
   */
  h6: HTMLHeadingElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/head
   * @see {@linkcode HTMLHeadElement}
   */
  head: HTMLHeadElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/header
   * @see {@linkcode HTMLElement}
   */
  header: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hgroup
   * @see {@linkcode HTMLElement}
   */
  hgroup: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/hr
   * @see {@linkcode HTMLHRElement}
   */
  hr: HTMLHRElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/html
   * @see {@linkcode HTMLHtmlElement}
   */
  html: HTMLHtmlElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/i
   * @see {@linkcode HTMLElement}
   */
  i: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe
   * @see {@linkcode HTMLIFrameElement}
   */
  iframe: HTMLIFrameElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/img
   * @see {@linkcode HTMLImageElement}
   */
  img: HTMLImageElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input
   * @see {@linkcode HTMLInputElement}
   */
  input: HTMLInputElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ins
   * @see {@linkcode HTMLModElement}
   */
  ins: HTMLModElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/kbd
   * @see {@linkcode HTMLElement}
   */
  kbd: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/label
   * @see {@linkcode HTMLLabelElement}
   */
  label: HTMLLabelElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/legend
   * @see {@linkcode HTMLLegendElement}
   */
  legend: HTMLLegendElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/li
   * @see {@linkcode HTMLLIElement}
   */
  li: HTMLLIElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/link
   * @see {@linkcode HTMLLinkElement}
   */
  link: HTMLLinkElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/main
   * @see {@linkcode HTMLElement}
   */
  main: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/map
   * @see {@linkcode HTMLMapElement}
   */
  map: HTMLMapElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/mark
   * @see {@linkcode HTMLElement}
   */
  mark: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meta
   * @see {@linkcode HTMLMetaElement}
   */
  meta: HTMLMetaElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/meter
   * @see {@linkcode HTMLMeterElement}
   */
  meter: HTMLMeterElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/nav
   * @see {@linkcode HTMLElement}
   */
  nav: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/noscript
   * @see {@linkcode HTMLElement}
   */
  noscript: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/object
   * @see {@linkcode HTMLObjectElement}
   */
  object: HTMLObjectElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ol
   * @see {@linkcode HTMLOListElement}
   */
  ol: HTMLOListElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/optgroup
   * @see {@linkcode HTMLOptGroupElement}
   */
  optgroup: HTMLOptGroupElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/option
   * @see {@linkcode HTMLOptionElement}
   */
  option: HTMLOptionElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/output
   * @see {@linkcode HTMLOutputElement}
   */
  output: HTMLOutputElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/p
   * @see {@linkcode HTMLParagraphElement}
   */
  p: HTMLParagraphElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/param
   * @see {@linkcode HTMLParamElement}
   */
  param: HTMLParamElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/picture
   * @see {@linkcode HTMLPictureElement}
   */
  picture: HTMLPictureElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/pre
   * @see {@linkcode HTMLPreElement}
   */
  pre: HTMLPreElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/progress
   * @see {@linkcode HTMLProgressElement}
   */
  progress: HTMLProgressElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/q
   * @see {@linkcode HTMLQuoteElement}
   */
  q: HTMLQuoteElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rp
   * @see {@linkcode HTMLElement}
   */
  rp: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rt
   * @see {@linkcode HTMLElement}
   */
  rt: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ruby
   * @see {@linkcode HTMLElement}
   */
  ruby: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/s
   * @see {@linkcode HTMLElement}
   */
  s: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/samp
   * @see {@linkcode HTMLElement}
   */
  samp: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/script
   * @see {@linkcode HTMLScriptElement}
   */
  script: HTMLScriptElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/section
   * @see {@linkcode HTMLElement}
   */
  section: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select
   * @see {@linkcode HTMLSelectElement}
   */
  select: HTMLSelectElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/slot
   * @see {@linkcode HTMLSlotElement}
   */
  slot: HTMLSlotElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/small
   * @see {@linkcode HTMLElement}
   */
  small: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/source
   * @see {@linkcode HTMLSourceElement}
   */
  source: HTMLSourceElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/span
   * @see {@linkcode HTMLSpanElement}
   */
  span: HTMLSpanElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/strong
   * @see {@linkcode HTMLElement}
   */
  strong: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/style
   * @see {@linkcode HTMLStyleElement}
   */
  style: HTMLStyleElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sub
   * @see {@linkcode HTMLElement}
   */
  sub: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/summary
   * @see {@linkcode HTMLElement}
   */
  summary: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sup
   * @see {@linkcode HTMLElement}
   */
  sup: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/table
   * @see {@linkcode HTMLTableElement}
   */
  table: HTMLTableElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tbody
   * @see {@linkcode HTMLTableSectionElement}
   */
  tbody: HTMLTableSectionElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/td
   * @see {@linkcode HTMLTableCellElement}
   */
  td: HTMLTableCellElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/template
   * @see {@linkcode HTMLTemplateElement}
   */
  template: HTMLTemplateElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/textarea
   * @see {@linkcode HTMLTextAreaElement}
   */
  textarea: HTMLTextAreaElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tfoot
   * @see {@linkcode HTMLTableSectionElement}
   */
  tfoot: HTMLTableSectionElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th
   * @see {@linkcode HTMLTableCellElement}
   */
  th: HTMLTableCellElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/thead
   * @see {@linkcode HTMLTableSectionElement}
   */
  thead: HTMLTableSectionElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/time
   * @see {@linkcode HTMLTimeElement}
   */
  time: HTMLTimeElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/title
   * @see {@linkcode HTMLTitleElement}
   */
  title: HTMLTitleElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/tr
   * @see {@linkcode HTMLTableRowElement}
   */
  tr: HTMLTableRowElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/track
   * @see {@linkcode HTMLTrackElement}
   */
  track: HTMLTrackElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/u
   * @see {@linkcode HTMLElement}
   */
  u: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/ul
   * @see {@linkcode HTMLUListElement}
   */
  ul: HTMLUListElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/var
   * @see {@linkcode HTMLElement}
   */
  var: HTMLElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/video
   * @see {@linkcode HTMLVideoElement}
   */
  video: HTMLVideoElement

  /**
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/wbr
   * @see {@linkcode HTMLElement}
   */
  wbr: HTMLElement
}

export type { HtmlElements as default }
