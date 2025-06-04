/**
 * @file App
 * @module website/client/app/App
 */

import type { EmptyObject } from '@flex-development/tutils'
import { Layout } from '@glyphink/website/theme'
import { SpeedInsights } from '@vercel/speed-insights/react'
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
      <SpeedInsights />
    </StrictMode>
  )
}

App.displayName = 'App'

export default App
