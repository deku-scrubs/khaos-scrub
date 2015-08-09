/**
 * Imports
 */

import test from 'tape'
import empty from 'component-empty'
import element from 'magic-virtual-element'
import {tree, render} from 'deku'
import {{basename}} from '..'

/**
 * Tests
 */

test('should work', function ({equal, end}) {

})

/**
 * Helpers
 */

function create (component) {
  empty(document.body)
  const container = document.body.appendChild(document.createElement('div'))
  render(tree(component), container)
  return container
}
