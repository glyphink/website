/**
 * @file Interfaces - AriaAttributes
 * @module website/theme/interfaces/AriaAttributes
 */

import type {
  AriaAutoComplete,
  AriaChecked,
  AriaCurrent,
  AriaDropEffect,
  AriaHasPopup,
  AriaInvalid,
  AriaLive,
  AriaOrientation,
  AriaPressed,
  AriaRelevant,
  AriaSort,
  Booleanish
} from '@glyphink/website/theme'

/**
 * WAI-ARIA attributes.
 *
 * @see https://www.w3.org/TR/wai-aria-1.2/#state_prop_def
 */
interface AriaAttributes {
  /**
   * Identifies the currently active element when DOM focus is on a
   * [composite][] widget, [textbox][], [group][], or [application][].
   *
   * [application]: https://www.w3.org/TR/wai-aria-1.2/#application
   * [composite]: https://www.w3.org/TR/wai-aria-1.2/#composite
   * [group]: https://www.w3.org/TR/wai-aria-1.2/#group
   * [textbox]: https://www.w3.org/TR/wai-aria-1.2/#textbox
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-activedescendant
   */
  'aria-activedescendant'?: string | undefined

  /**
   * Indicates whether [assistive technologies][assistive-technology] will
   * present all, or only parts of, the changed region based on the change
   * notifications defined by the {@linkcode aria-relevant} attribute.
   *
   * [assistive-technology]: https://www.w3.org/TR/wai-aria-1.2/#dfn-assistive-technology
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-atomic
   * @see {@linkcode Booleanish}
   */
  'aria-atomic'?: Booleanish | undefined

  /**
   * Indicates whether inputting text could trigger display of one or more
   * predictions of the user's intended value for an input and specifies how
   * predictions would be presented if they are made.
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-autocomplete
   * @see {@linkcode AriaAutoComplete}
   */
  'aria-autocomplete'?: AriaAutoComplete | undefined

  /**
   * Defines a string value that labels the current element, which is intended
   * to be converted into Braille.
   *
   * @see {@linkcode aria-label}
   */
  'aria-braillelabel'?: string | undefined

  /**
   * Defines a human-readable, author-localized abbreviated description for the
   * role of an element, which is intended to be converted into Braille.
   *
   * @see {@linkcode aria-roledescription}
   */
  'aria-brailleroledescription'?: string | undefined

  /**
   * Indicates an element is being modified and that assistive technologies
   * ***MAY*** want to wait until the modifications are complete before exposing
   * them to the user.
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-busy
   * @see {@linkcode Booleanish}
   */
  'aria-busy'?: Booleanish | undefined

  /**
   * Indicates the current "checked" [state][] of checkboxes, radio buttons, and
   * other [widgets][].
   *
   * [state]: https://www.w3.org/TR/wai-aria-1.2/#dfn-state
   * [widgets]: https://www.w3.org/TR/wai-aria-1.2/#dfn-widget
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-checked
   * @see {@linkcode AriaChecked}
   * @see {@linkcode aria-pressed}
   * @see {@linkcode aria-selected}
   */
  'aria-checked'?: AriaChecked | undefined

  /**
   * Defines the total number of columns in a [table][], [grid][], or
   * [treegrid][].
   *
   * [grid]: https://www.w3.org/TR/wai-aria-1.2/#grid
   * [table]: https://www.w3.org/TR/wai-aria-1.2/#table
   * [treegrid]: https://www.w3.org/TR/wai-aria-1.2/#treegrid
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-colcount
   * @see {@linkcode aria-colindex}
   */
  'aria-colcount'?: number | undefined

  /**
   * Defines an [element's][element] column index or position with respect to
   * the total number of columns within a [table][], [grid][], or
   * [treegrid][].
   *
   * [element]: https://www.w3.org/TR/wai-aria-1.2/#dfn-element
   * [grid]: https://www.w3.org/TR/wai-aria-1.2/#grid
   * [table]: https://www.w3.org/TR/wai-aria-1.2/#table
   * [treegrid]: https://www.w3.org/TR/wai-aria-1.2/#treegrid
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-colindex
   * @see {@linkcode aria-colcount}
   * @see {@linkcode aria-colspan}
   */
  'aria-colindex'?: number | undefined

  /**
   * Defines a human readable text alternative of {@linkcode aria-colindex}.
   *
   * @see {@linkcode aria-rowindextext}
   */
  'aria-colindextext'?: string | undefined

  /**
   * Defines the number of columns spanned by a cell or gridcell within a
   * [table][], [grid][], or [treegrid][].
   *
   * [grid]: https://www.w3.org/TR/wai-aria-1.2/#grid
   * [table]: https://www.w3.org/TR/wai-aria-1.2/#table
   * [treegrid]: https://www.w3.org/TR/wai-aria-1.2/#treegrid
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-colspan
   * @see {@linkcode aria-colindex}
   * @see {@linkcode aria-rowspan}
   */
  'aria-colspan'?: number | undefined

  /**
   * Identifies the [element][] (or elements) whose contents or presence are
   * controlled by the current element.
   *
   * [element]: https://www.w3.org/TR/wai-aria-1.2/#dfn-element
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-colspan
   * @see {@linkcode aria-owns}
   */
  'aria-controls'?: string | undefined

  /**
   * Indicates the [element][] that represents the current item within a
   * container or set of related elements.
   *
   * [element]: https://www.w3.org/TR/wai-aria-1.2/#dfn-element
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-current
   * @see {@linkcode AriaCurrent}
   */
  'aria-current'?: AriaCurrent | undefined

  /**
   * Identifies the [element][] (or elements) that describes the [object][].
   *
   * [element]: https://www.w3.org/TR/wai-aria-1.2/#dfn-element
   * [object]: https://www.w3.org/TR/wai-aria-1.2/#dfn-object
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-describedby
   * @see {@linkcode aria-labelledby}
   */
  'aria-describedby'?: string | undefined

  /**
   * Defines a string value that describes or annotates the current [element][].
   *
   * [element]: https://www.w3.org/TR/wai-aria-1.2/#dfn-element
   *
   * @see {@linkcode aria-describedby}
   */
  'aria-description'?: string | undefined

  /**
   * Identifies the [element][] that provides a detailed, extended description
   * for the [object][].
   *
   * [element]: https://www.w3.org/TR/wai-aria-1.2/#dfn-element
   * [object]: https://www.w3.org/TR/wai-aria-1.2/#dfn-object
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-details
   * @see {@linkcode aria-describedby}
   */
  'aria-details'?: string | undefined

  /**
   * Indicates that the [element][] is [perceivable][] but disabled, so it is
   * not editable or otherwise [operable][].
   *
   * [operable]: https://www.w3.org/TR/wai-aria-1.2/#dfn-operable
   * [perceivable]: https://www.w3.org/TR/wai-aria-1.2/#dfn-perceivable
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-details
   * @see {@linkcode Booleanish}
   * @see {@linkcode aria-hidden}
   * @see {@linkcode aria-readonly}
   */
  'aria-disabled'?: Booleanish | undefined

  /**
   * Indicates what functions can be performed when a dragged object is released
   * on the drop target.
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-dropeffect
   * @see {@linkcode AriaDropEffect}
   *
   * @deprecated ARIA 1.1
   */
  'aria-dropeffect'?: AriaDropEffect | undefined

  /**
   * Identifies the [element][] that provides an error message for the
   * [object][].
   *
   * [element]: https://www.w3.org/TR/wai-aria-1.2/#dfn-element
   * [object]: https://www.w3.org/TR/wai-aria-1.2/#dfn-object
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-errormessage
   * @see {@linkcode aria-describedby}
   * @see {@linkcode aria-invalid}
   */
  'aria-errormessage'?: string | undefined

  /**
   * Indicates whether the [element][], or another grouping element it controls,
   * is currently expanded or collapsed.
   *
   * [element]: https://www.w3.org/TR/wai-aria-1.2/#dfn-element
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-expanded
   * @see {@linkcode Booleanish}
   */
  'aria-expanded'?: Booleanish | undefined

  /**
   * Identifies the next [element][] (or elements) in an alternate reading order
   * of content which, at the user's discretion, allows assistive technology to
   * override the general default of reading in document source order.
   *
   * [element]: https://www.w3.org/TR/wai-aria-1.2/#dfn-element
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-flowto
   */
  'aria-flowto'?: string | undefined

  /**
   * Indicates an element's "grabbed" state in a drag-and-drop operation.
   *
   * [state]: https://www.w3.org/TR/wai-aria-1.2/#dfn-state
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-flowto
   * @see {@linkcode Booleanish}
   *
   * @deprecated ARIA 1.1
   */
  'aria-grabbed'?: Booleanish | undefined

  /**
   * Indicates the availability and type of interactive popup element, such as
   * menu or dialog, that can be triggered by an [element][].
   *
   * [element]: https://www.w3.org/TR/wai-aria-1.2/#dfn-element
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-haspopup
   * @see {@linkcode AriaHasPopup}
   */
  'aria-haspopup'?: AriaHasPopup | undefined

  /**
   * Indicates whether the [element][] is exposed to an accessibility API.
   *
   * [element]: https://www.w3.org/TR/wai-aria-1.2/#dfn-element
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-hidden
   * @see {@linkcode Booleanish}
   * @see {@linkcode aria-disabled}
   */
  'aria-hidden'?: Booleanish | undefined

  /**
   * Indicates the entered value does not conform to the format expected by the
   * application.
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-invalid
   * @see {@linkcode AriaInvalid}
   * @see {@linkcode aria-errormessage}
   */
  'aria-invalid'?: AriaInvalid | undefined

  /**
   * Indicates keyboard shortcuts that an author has implemented to activate or
   * give focus to an element.
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-keyshortcuts
   */
  'aria-keyshortcuts'?: string | undefined

  /**
   * Defines a string value that labels the current element.
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-label
   * @see {@linkcode aria-labelledby}
   */
  'aria-label'?: string | undefined

  /**
   * Identifies the [element][] (or elements) that labels the current element.
   *
   * [element]: https://www.w3.org/TR/wai-aria-1.2/#dfn-element
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-labelledby
   * @see {@linkcode aria-describedby}
   */
  'aria-labelledby'?: string | undefined

  /**
   * Defines the hierarchical level of an [element][] within a structure.
   *
   * [element]: https://www.w3.org/TR/wai-aria-1.2/#dfn-element
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-level
   */
  'aria-level'?: number | undefined

  /**
   * Indicates that an [element][] will be updated, and describes the types of
   * updates the user agents, assistive technologies, and user can expect from
   * the live region.
   *
   * [assistive-technology]: https://www.w3.org/TR/wai-aria-1.2/#dfn-assistive-technology
   * [element]: https://www.w3.org/TR/wai-aria-1.2/#dfn-element
   * [live-region]: https://www.w3.org/TR/wai-aria-1.2/#dfn-live-region
   * [user-agent]: https://www.w3.org/TR/wai-aria-1.2/#dfn-user-agent
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-live
   * @see {@linkcode AriaLive}
   */
  'aria-live'?: AriaLive | undefined

  /**
   * Indicates whether an [element][] is modal when displayed.
   *
   * [element]: https://www.w3.org/TR/wai-aria-1.2/#dfn-element
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-modal
   * @see {@linkcode Booleanish}
   */
  'aria-modal'?: Booleanish | undefined

  /**
   * Indicates whether a text box accepts multiple lines of input or only a
   * single line.
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-multiline
   * @see {@linkcode Booleanish}
   */
  'aria-multiline'?: Booleanish | undefined

  /**
   * Indicates that the user may select more than one item from the current
   * selectable descendants.
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-multiselectable
   * @see {@linkcode Booleanish}
   */
  'aria-multiselectable'?: Booleanish | undefined

  /**
   * Indicates that the user may select more than one item from the current
   * selectable descendants.
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-orientation
   * @see {@linkcode AriaOrientation}
   */
  'aria-orientation'?: AriaOrientation | undefined

  /**
   * Identifies an [element][] (or elements) in order to define a visual,
   * functional, or contextual parent/child relationship between DOM elements
   * where the DOM hierarchy cannot be used to represent the relationship.
   *
   * [element]: https://www.w3.org/TR/wai-aria-1.2/#dfn-element
   * [relationship]: https://www.w3.org/TR/wai-aria-1.2/#dfn-relationship
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-owns
   * @see {@linkcode aria-controls}
   */
  'aria-owns'?: string | undefined

  /**
   * Defines a short hint (a word or short phrase) intended to aid the user with
   * data entry when the control has no value. A hint could be a sample value or
   * a brief description of the expected format.
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-placeholder
   */
  'aria-placeholder'?: string | undefined

  /**
   * Defines an [element][]'s number or position in the current set of listitems
   * or treeitems.
   *
   * > 👉 **Note**: Not required if all elements in the set are present in the
   * > DOM.
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-posinset
   * @see {@linkcode aria-setsize}
   */
  'aria-posinset'?: number | undefined

  /**
   * Indicates the current "pressed" [state][] of toggle buttons.
   *
   * [state]: https://www.w3.org/TR/wai-aria-1.2/#dfn-state
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-pressed
   * @see {@linkcode AriaPressed}
   * @see {@linkcode aria-setsize}
   */
  'aria-pressed'?: AriaPressed | undefined

  /**
   * Indicates that the [element][] is not editable,
   * but is otherwise [operable][].
   *
   * [element]: https://www.w3.org/TR/wai-aria-1.2/#dfn-element
   * [operable]: https://www.w3.org/TR/wai-aria-1.2/#dfn-operable
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-readonly
   * @see {@linkcode Booleanish}
   * @see {@linkcode aria-disabled}
   */
  'aria-readonly'?: Booleanish | undefined

  /**
   * Indicates what notifications the user agent will trigger when the
   * accessibility tree within a live region is modified.
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-relevant
   * @see {@linkcode AriaRelevant}
   * @see {@linkcode aria-atomic}
   */
  'aria-relevant'?: AriaRelevant | undefined

  /**
   * Indicates that user input is required on the [element][] before a form may
   * be submitted.
   *
   * [element]: https://www.w3.org/TR/wai-aria-1.2/#dfn-element
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-required
   * @see {@linkcode Booleanish}
   */
  'aria-required'?: Booleanish | undefined

  /**
   * Defines a human-readable, author-localized description for the [role][] of
   * an [element][].
   *
   * [element]: https://www.w3.org/TR/wai-aria-1.2/#dfn-element
   * [role]: https://www.w3.org/TR/wai-aria-1.2/#dfn-role
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-roledescription
   */
  'aria-roledescription'?: string | undefined

  /**
   * Defines the total number of rows in a [table][], [grid][], or
   * [treegrid][].
   *
   * [grid]: https://www.w3.org/TR/wai-aria-1.2/#grid
   * [table]: https://www.w3.org/TR/wai-aria-1.2/#table
   * [treegrid]: https://www.w3.org/TR/wai-aria-1.2/#treegrid
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-rowcount
   * @see {@linkcode aria-rowindex}
   */
  'aria-rowcount'?: number | undefined

  /**
   * Defines an [element's][element] row index or position with respect to
   * the total number of rows within a [table][], [grid][], or [treegrid][].
   *
   * [element]: https://www.w3.org/TR/wai-aria-1.2/#dfn-element
   * [grid]: https://www.w3.org/TR/wai-aria-1.2/#grid
   * [table]: https://www.w3.org/TR/wai-aria-1.2/#table
   * [treegrid]: https://www.w3.org/TR/wai-aria-1.2/#treegrid
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-rowindex
   * @see {@linkcode aria-rowcount}
   * @see {@linkcode aria-rowspan}
   */
  'aria-rowindex'?: number | undefined

  /**
   * Defines a human readable text alternative of {@linkcode aria-rowindex}.
   *
   * @see {@linkcode aria-colindextext}
   */
  'aria-rowindextext'?: string | undefined

  /**
   * Defines the number of rows spanned by a cell or gridcell within a
   * [table][], [grid][], or [treegrid][].
   *
   * [grid]: https://www.w3.org/TR/wai-aria-1.2/#grid
   * [table]: https://www.w3.org/TR/wai-aria-1.2/#table
   * [treegrid]: https://www.w3.org/TR/wai-aria-1.2/#treegrid
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-colspan
   * @see {@linkcode aria-colspan}
   * @see {@linkcode aria-rowindex}
   */
  'aria-rowspan'?: number | undefined

  /**
   * Indicates the current "selected" [state][] of various [widgets][].
   *
   * [state]: https://www.w3.org/TR/wai-aria-1.2/#dfn-state
   * [widgets]: https://www.w3.org/TR/wai-aria-1.2/#dfn-widget
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-selected
   * @see {@linkcode Booleanish}
   * @see {@linkcode aria-checked}
   * @see {@linkcode aria-pressed}
   */
  'aria-selected'?: Booleanish | undefined

  /**
   * Defines the number of items in the current set of listitems or treeitems.
   *
   * > 👉 **Note**: Not required if all elements in the set are present in the
   * > DOM.
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-setsize
   * @see {@linkcode aria-posinset}
   */
  'aria-setsize'?: number | undefined

  /**
   * Indicates if items in a table or grid are sorted in ascending or descending
   * order.
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-sort
   * @see {@linkcode AriaSort}
   */
  'aria-sort'?: AriaSort | undefined

  /**
   * Defines the maximum allowed value for a range [widget][].
   *
   * [widget]: https://www.w3.org/TR/wai-aria-1.2/#dfn-widget
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-valuemax
   */
  'aria-valuemax'?: number | undefined

  /**
   * Defines the minimum allowed value for a range [widget][].
   *
   * [widget]: https://www.w3.org/TR/wai-aria-1.2/#dfn-widget
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-valuemin
   */
  'aria-valuemin'?: number | undefined

  /**
   * Defines the current value for a range [widget][].
   *
   * [widget]: https://www.w3.org/TR/wai-aria-1.2/#dfn-widget
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-valuenow
   * @see {@linkcode aria-valuetext}
   */
  'aria-valuenow'?: number | undefined

  /**
   * Defines the human readable text alternative of {@linkcode aria-valuenow}
   * for a range [widget][].
   *
   * [widget]: https://www.w3.org/TR/wai-aria-1.2/#dfn-widget
   *
   * @see https://www.w3.org/TR/wai-aria-1.2/#aria-valuetext
   */
  'aria-valuetext'?: string | undefined
}

export type { AriaAttributes as default }
