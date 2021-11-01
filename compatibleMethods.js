
import defaultMethods from './defaultMethods.js'
import { truthy } from './utilities/truthy.js'

// also the yielded operators will not work.

export default {
  ...defaultMethods,
  truthy,
  '!': value => !truthy(value),
  not: value => !truthy(value),
  '!!': truthy,
  if: {
    ...defaultMethods.if,
    compile: false
  },
  '?:': {
    ...defaultMethods.if,
    compile: false
  },
  or: (arr) => arr.reduce((a, b) => {
    if (truthy(a)) { return a }
    return b
  }, false),
  and: (arr) => arr.reduce((a, b) => {
    if (!truthy(a)) {
      return a
    }
    return b
  })
}
