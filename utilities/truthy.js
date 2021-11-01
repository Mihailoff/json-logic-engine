/**
 * A function that is used to make JSON Logic Engine compatible with the truthiness specifications of
 * the original JSON Logic library
 * @param {*} value
 * @param {*} mode
 * @returns
 */
export function truthy (value, mode = true) {
  if (Array.isArray(value)) {
    if (mode && value.length === 1) {
      return truthy(value[0], false)
    }

    if (value.length === 0) { return false }
  }
  return !!value
}
