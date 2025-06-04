/**
 * @file entry
 * @module website/client/app/entry/client
 */

import { ok } from 'devlop'
import { createRoot } from 'react-dom/client'
import createApp from './create-app.tsx'

await render()

/**
 * Render the application component on the client.
 *
 * @async
 *
 * @this {void}
 *
 * @return {Promise<undefined>}
 */
async function render(this: void): Promise<undefined> {
  return createApp().then(({ app }): undefined => {
    /**
     * The container to render {@linkcode app} into.
     *
     * @const {Element | null} container
     */
    const container: Element | null = document.querySelector('#root')

    ok(container, 'expected `container`')
    return void createRoot(container).render(app)
  })
}
