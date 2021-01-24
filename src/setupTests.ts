import { format } from 'util'


// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

// Taken from https://github.com/facebook/jest/issues/6121#issuecomment-708330601
let consoleHasErrorOrWarning = false
const { error, warn } = console

global.console.error = (...args: any[]) => {
  consoleHasErrorOrWarning = true
  error(format(...args))
}
global.console.warn = (...args: any[]) => {
  consoleHasErrorOrWarning = true
  warn(format(...args))
}

afterEach(() => {
  if (consoleHasErrorOrWarning) {
    consoleHasErrorOrWarning = false
    throw new Error('Console has error or warning')
  }
})