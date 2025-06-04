/**
 * @file createApp
 * @module website/client/app/createApp
 */

import type { JSX } from 'react'
import App from './App.tsx'

export default createApp

/**
 * Create the application component.
 *
 * @async
 *
 * @return {Promise<{ app: JSX.Element }>}
 *  App result
 */
async function createApp(this: void): Promise<{ app: JSX.Element }> {
  return new Promise(resolve => {
    return void resolve({ app: <App /> })
  })
}
