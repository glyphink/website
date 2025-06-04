/**
 * @file App
 * @module website/client/app/App
 */

import type { EmptyObject } from '@flex-development/tutils'
import { Layout } from '@glyphink/website/theme'
import { StrictMode, type FC, type JSX } from 'react'

/**
 * Render the application.
 *
 * @type {FC<EmptyObject>}
 *
 * @return {JSX.Element}
 *  JSX element
 */
const App: FC<EmptyObject> = (): JSX.Element => {
  return (
    <StrictMode>
      <Layout>
        {null}
      </Layout>
    </StrictMode>
  )
}

App.displayName = 'App'

export default App
