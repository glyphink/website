import type { GlobalAttributes } from '@glyphink/website/theme'
import type {} from 'react'

declare module 'react' {
  /**
   * The type of the component returned by {@linkcode forwardRef}.
   *
   * @see {@linkcode GlobalAttributes}
   *
   * @template {GlobalAttributes} P
   *  Component props
   */
  interface ForwardRefExoticComponent<P extends GlobalAttributes> {
    /**
     * Default component properties.
     *
     * @deprecated
     */
    defaultProps?: P | undefined
  }

  /**
   * The type of the component returned by {@linkcode forwardRef}.
   *
   * > 👉 **Note**: Alias for {@linkcode ForwardRefExoticComponent}.
   *
   * @see {@linkcode GlobalAttributes}
   *
   * @template {GlobalAttributes} P
   *  Component props
   */
  export type FRC<P extends GlobalAttributes> = ForwardRefExoticComponent<P>
}
