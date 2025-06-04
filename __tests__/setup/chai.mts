/**
 * @file Test Setup - chai
 * @module tests/setup/chai
 * @see https://chaijs.com
 * @see https://github.com/nathanboktae/chai-dom
 */

import dom from 'chai-dom'
import { chai } from 'vitest'

chai.use(dom)
