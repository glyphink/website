/**
 * @file Interfaces - GlobalAttributes
 * @module website/theme/interfaces/GlobalAttributes
 */

import type { JsonPrimitive } from '@flex-development/tutils'
import type {
  AriaRole,
  AutoCapitalize,
  Element,
  EnterKeyHint,
  HtmlElements,
  InputMode
} from '@glyphink/website/theme'
import type {
  AllHTMLAttributes,
  AriaAttributes,
  DOMAttributes,
  HTMLAttributes,
  RefAttributes
} from 'react'

/**
 * Attributes common to components that render HTML or SVG elements.
 *
 * > 👉 **Note**: Although these atttributes can be used on all elements, they
 * > may have no effect.
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Global_attributes
 * @see https://developer.mozilla.org/docs/Web/HTML/Attributes
 * @see {@linkcode Element}
 *
 * @template {Element} [E=Element]
 *  HTML or SVG element
 *
 * @extends {AriaAttributes}
 * @extends {DOMAttributes<E>}
 * @extends {RefAttributes<E>}
 */
interface GlobalAttributes<
  E extends Element = Element
> extends AriaAttributes, DOMAttributes<E>, RefAttributes<E> {
  /**
   * Space-delimited list providing a hint for generating a keyboard shortcut
   * for the current component.
   */
  accessKey?: HTMLAttributes<E>['accessKey'] | undefined

  /**
   * Controls whether and how text input is automatically capitalized as it is
   * entered/edited by the user. It can have the following values:
   *
   * - `off` / `none`: no capitalization applied (letters default to
   *   lowercase)
   * - `on`/ `sentences`: capitalize the first letter of each sentence
   * - `words`:  capitalize the first letter of each word
   * - `characters`: capitalize all letters
   *
   * @see {@linkcode AutoCapitalize}
   */
  autoCapitalize?: AutoCapitalize | undefined

  /**
   * Indicates that a component is to be focused on page load, or as soon as
   * the `Dialog` it is part of is displayed.
   *
   * @default false
   */
  autoFocus?: AllHTMLAttributes<E>['autoFocus'] | undefined

  /**
   * Content to render inside the component.
   *
   * If defined, `dangerouslySetInnerHTML` must be omitted.
   */
  children?: HTMLAttributes<E>['children'] | undefined

  /**
   * Space-delimited list of the CSS classes to apply to the component.
   *
   * Classes allow CSS and JavaScript to select and access specific components
   * via selectors or functions (e.g `document.getElementsByClassName()`).
   */
  className?: HTMLAttributes<E>['className'] | undefined

  /**
   * An enumerated attribute indicating if the component should be editable by
   * the user. If so, the browser modifies its widget to allow editing.
   */
  contentEditable?: HTMLAttributes<E>['contentEditable'] | undefined

  /**
   * The `id` of a `<menu>` to use as the contextual menu for this component.
   */
  contextMenu?: HTMLAttributes<E>['contextMenu'] | undefined

  /**
   * ReactJS replacement for using `innerHTML` in the browser DOM.
   *
   * Setting HTML from code is risky because it is easy to inadvertently
   * expose users to a [cross-site scripting (XSS)][1] attack.
   *
   * [1]: https://en.wikipedia.org/wiki/Cross-site_scripting
   */
  dangerouslySetInnerHTML?:
    | HTMLAttributes<E>['dangerouslySetInnerHTML']
    | undefined

  /**
   * Forms a class of attributes, called custom data attributes, that allow
   * proprietary information to be exchanged between the [HTML][1] and its
   * [DOM][2] representation that may be used by scripts.
   *
   * [1]: https://developer.mozilla.org/docs/Web/HTML
   * [2]: https://developer.mozilla.org/docs/Glossary/DOM
   */
  [key: `data-${string}`]: JsonPrimitive | undefined

  /**
   * An enumerated attribute indicating the directionality of the component's
   * text. It can have the following values:
   *
   * - `auto`: let user agent decide directionality
   * - `ltr`: left to right
   * - `rtl`: right to left
   */
  dir?: HTMLAttributes<E>['dir'] | undefined

  /**
   * An enumerated attribute indicating whether the component can be dragged,
   * using the [Drag and Drop API][1]. It can have the following values:
   *
   * - `true`: component may be dragged
   * - `false`: component may not be dragged
   *
   * [1]: https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API
   */
  draggable?: HTMLAttributes<E>['draggable'] | undefined

  /**
   * Hints what action label (or icon) to use to represent the enter key on
   * virtual keyboards.
   *
   * @see {@linkcode EnterKeyHint}
   */
  enterKeyHint?: EnterKeyHint | undefined

  /**
   * A `Boolean` attribute indicating that the component is not yet, or is no
   * longer, relevant. For example, it can be used to hide components of the
   * page that can't be used until the login process has been completed.
   *
   * This attribute must not be used to hide content that could legitimately
   * be shown.
   */
  hidden?: HTMLAttributes<E>['hidden'] | undefined

  /**
   * Defines a unique identifier (ID) which must be unique in the whole
   * document. Its purpose is to identify the component when linking (using a
   * fragment identifier), scripting, or styling (with CSS).
   */
  id?: HTMLAttributes<E>['id'] | undefined

  /**
   * Hints at the type of data that might be entered by the user while editing
   * the element or its contents, thus providing a hint to browsers as to the
   * type of virtual keyboard configuration as well.
   *
   * Used primarily on `Input` components, but is usable on any component with
   * `contentEditable` enabled.
   *
   * @see {@linkcode InputMode}
   */
  inputMode?: InputMode | undefined

  /**
   * Specify that a standard HTML component should behave like a defined
   * custom built-in component.
   *
   * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
   * @see {@linkcode HtmlElements}
   */
  is?: keyof HtmlElements | undefined

  /**
   * Unique [key][1] used to help React identify which items have been changed
   * added, or removed.
   *
   * [1]: https://reactjs.org/docs/lists-and-keys.html#keys
   */
  key?: RefAttributes<E>['key'] | undefined

  /**
   * Helps define the language of an component: the language that non-editable
   * components are in, or the language that editable components should be
   * written in by the user. The attribute contains one “language tag” (made
   * of hyphen-separated “language subtags”) in the format defined in [RFC
   * 5646: Tags for Identifying Languages (also known as BCP 47)][1].
   *
   * [`xml:lang`][2] has priority over this attribute.
   *
   * [1]: https://datatracker.ietf.org/doc/html/rfc5646
   * [2]: https://developer.mozilla.org/docs/Web/HTML/Global_attributes#attr-xml:lang
   */
  lang?: HTMLAttributes<E>['lang'] | undefined

  /**
   * A cryptographic nonce ("number used once") which can be used by [Content
   * Security Policy][1] to determine whether or not a given fetch will be
   * allowed to proceed.
   *
   * [1]: https://developer.mozilla.org/docs/Web/HTTP/CSP
   */
  nonce?: AllHTMLAttributes<E>['nonce'] | undefined

  /**
   * Reference to underlying HTML element.
   *
   * @see https://reactjs.org/docs/refs-and-the-dom.html
   */
  ref?: RefAttributes<E>['ref'] | undefined

  /**
   * [WAI-ARIA][1] role.
   *
   * [1]: https://developer.mozilla.org/docs/Web/Accessibility/ARIA/Roles
   *
   * @see {@linkcode AriaRole}
   */
  role?: AriaRole | undefined

  /**
   * An enumerated attribute defines whether the component may be checked for
   * spelling errors.
   *
   * It may have the following values:
   *
   * - `true`: component should be checked for spelling errors (if possible)
   * - `false`: component should not be checked for spelling errors
   */
  spellCheck?: HTMLAttributes<E>['spellCheck'] | undefined

  /**
   * Normally, there is a warning when a component with `children` is also
   * marked as `contentEditable`, because it will not work. This attribute
   * suppresses that warning.
   *
   * Don’t use this unless you are building a library like [Draft.js][1] that
   * manages `contentEditable` manually.
   *
   * [1]: https://draftjs.org
   */
  suppressContentEditableWarning?:
    | HTMLAttributes<E>['suppressContentEditableWarning']
    | undefined

  /**
   * If you use server-side React rendering, normally there is a warning when
   * the server and the client render different content.
   *
   * However, in some rare cases, it is very hard or impossible to guarantee
   * an exact match. For example, timestamps are expected to differ on the
   * server and on the client.
   *
   * If you set `suppressHydrationWarning` to `true`, React will not warn you
   * about mismatches in the attributes and the content of that element. It
   * only works one level deep, and is intended to be used as an escape hatch.
   * Read more about hydration in the [`ReactDOM.hydrate()` documentation][1].
   *
   * [1]: https://reactjs.org/docs/react-dom.html#hydrate
   */
  suppressHydrationWarning?:
    | HTMLAttributes<E>['suppressHydrationWarning']
    | undefined

  /**
   * An integer attribute indicating if the component can take input focus (is
   * focusable), if it should participate to sequential keyboard navigation,
   * and if so, at what position.
   *
   * It can take several values:
   *
   * - negative value: component should be focusable, but should not be
   *   reachable via sequential keyboard navigation;
   * - `0`: component should be focusable and reachable via sequential
   *   keyboard navigation, but its relative order is defined by the platform
   *   convention;
   * - positive value: component should be focusable and reachable via
   *   sequential keyboard navigation; the order in which the components are
   *   focused is the increasing value of the `tabIndex`. If several
   *   components share the same `tabIndex`, their relative order follows
   *   their relative positions in the document.
   */
  tabIndex?: HTMLAttributes<E>['tabIndex'] | undefined

  /**
   * Contains a text representing advisory information related to the
   * component it belongs to. Such information can typically, but not
   * necessarily, be presented to the user as a tooltip.
   */
  title?: HTMLAttributes<E>['title'] | undefined

  /**
   * An enumerated attribute that is used to specify whether a component's
   * attribute values and the values of its [`Text`][1] node children are to
   * be translated when the page is localized, or whether to leave them
   * unchanged.
   *
   * It can have the following values:
   *
   * - `yes` / empty string: component will be translated
   * - `no`: component will not be translated
   *
   * [1]: https://developer.mozilla.org/docs/Web/API/Text
   */
  translate?: HTMLAttributes<E>['translate'] | undefined

  /**
   * Specify that the component cannot be selected.
   */
  unselectable?: HTMLAttributes<E>['unselectable'] | undefined
}

export type { GlobalAttributes as default }
