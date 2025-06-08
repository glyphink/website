/**
 * @file Components - AnchorProps
 * @module website/theme/components/atoms/AnchorProps
 */

import type { GlobalAttributes } from '@glyphink/website/theme'
import type { HTMLAttributeReferrerPolicy } from 'react'

/**
 * Anchor component props.
 *
 * @see {@linkcode GlobalAttributes}
 * @see {@linkcode HTMLAnchorElement}
 *
 * @extends {GlobalAttributes<HTMLAnchorElement>}
 */
interface AnchorProps extends GlobalAttributes<HTMLAnchorElement> {
  /**
   * Whether the browser should send an
   * [`Attribution-Reporting-Eligible`][Attribution-Reporting-Eligible] header.
   *
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a#attributionsrc
   *
   * [Attribution-Reporting-Eligible]: https://developer.mozilla.org/docs/Web/HTTP/Reference/Headers/Attribution-Reporting-Eligible
   */
  attributionSrc?: boolean | string | undefined

  /**
   * Hint at the [character encoding][character-encoding] of the linked URL.
   *
   * [character-encoding]: https://developer.mozilla.org/en-US/docs/Glossary/Character_encoding
   *
   * > 👉 **Note**: Authors should use the HTTP [`Content-Type`][content-type]
   * > header instead.
   *
   * [content-type]: https://developer.mozilla.org/docs/Web/HTTP/Reference/Headers/Content-Type
   *
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a#charset
   *
   * @deprecated
   */
  charSet?: string | undefined

  /**
   * A comma-separated list of coordinates used with {@linkcode shape}.
   *
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a#coords
   *
   * @deprecated
   */
  coords?: string | undefined

  /**
   * Whether the browser should treat the linked URL as a download.
   *
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a#download
   */
  download?: any

  /**
   * The URL that the hyperlink points to.
   *
   * Links are not restricted to HTTP-based URLs &mdash; they can use any URL
   * scheme supported by browsers:
   *
   * - Email addresses with `mailto:` URLs
   * - Executable code with [`javascript:` URLs][javascript-scheme]
   * - SMS text messages with `sms:` URLs
   * - Telephone numbers with `tel:` URLs
   *
   * Websites can support other URL schemes
   * with [`registerProtocolHandler()`][register-protocol-handler].
   *
   * Specific parts of a resource can also be located, including:
   *
   * - Pieces of media files with media fragments
   * - Sections of a page with fragment URLs
   * - Specific text portions with [text fragments][text-fragments]
   *
   * [javascript-scheme]: https://developer.mozilla.org/docs/Web/URI/Reference/Schemes/javascript
   * [register-protocol-handler]: https://developer.mozilla.org/docs/Web/API/Navigator/registerProtocolHandler
   * [text-fragments]: https://developer.mozilla.org/docs/Web/URI/Reference/Fragment/Text_fragments
   *
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a#href
   */
  href: string

  /**
   * Hint at the human language of the linked URL.
   *
   * > 👉 **Note**: No built-in functionality.
   *
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a#hreflang
   */
  hrefLang?: string | undefined

  /**
   * Define a possible target location in a page.
   *
   * > 👉 **Note**: Use {@linkcode id} instead.
   *
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a#name
   *
   * @deprecated
   */
  name?: string | undefined

  /**
   * A space-separated list of URLs.
   *
   * When the link is followed, the browser will send `POST` requests with the
   * body `PING` to the listed URLs.
   *
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a#ping
   */
  ping?: string | undefined

  /**
   * How much of the [referrer][] to send when following the link.
   *
   * [referrer]: https://developer.mozilla.org/docs/Web/HTTP/Reference/Headers/Referer
   *
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a#referrerpolicy
   * @see {@linkcode HTMLAttributeReferrerPolicy}
   */
  referrerPolicy?: HTMLAttributeReferrerPolicy | undefined

  /**
   * The relationship of the linked URL as space-separated link types.
   *
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a#rel
   */
  rel?: string | undefined

  /**
   * Specify a reverse link; the opposite of {@linkcode rel}.
   *
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a#rev
   *
   * @deprecated
   */
  rev?: string | undefined

  /**
   * The shape of the hyperlink's region in an image map.
   *
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a#shape
   *
   * @deprecated
   */
  shape?: string | undefined

  /**
   * Where to display the linked URL, as the name for a browsing context (a tab,
   * window, or [`<iframe>`][iframe]).
   *
   * - `_self`: the current browsing context
   * - `_blank`: usually a new tab, but users can configure browsers to open a
   *   new window instead
   * - `_parent`: the parent browsing context of the current one. If no parent,
   *   behaves as `_self`
   * - `_top`: the topmost browsing context (the "highest" context that’s an
   *   ancestor of the current one). If no ancestors, behaves as `_self`
   * - `_unfencedTop`: allow embedded [fenced frames][fenced-frames] to navigate
   *   the top-level frame (i.e., traversing beyond the root of the fenced
   *   frame, unlike other reserved destinations)
   *
   * [fenced-frames]: https://developer.mozilla.org/docs/Web/API/Fenced_frame_API
   * [iframe]: https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe
   *
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a#target
   *
   * @default '_self'
   */
  target?: '_blank' | '_parent' | '_self' | '_top' | '_unfencedTop' | undefined

  /**
   * Hint at the linked URL's format with a [MIME type][mime-type].
   *
   * > 👉 **Note**: No built-in functionality.
   *
   * [mime-type]: https://developer.mozilla.org/docs/Glossary/MIME_type
   *
   * @see https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a#type
   */
  type?: string | undefined
}

export type { AnchorProps as default }
