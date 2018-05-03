import 'normalize.css'
import 'vendor/fonts/charlie/index.css'
import 'vendor/fonts/nort/index.css'
import 'vendor/fonts/source-code-pro/index.css'
import Promise from 'bluebird'

Promise.config({
  cancellation: true,
  longStackTraces: true,
  warnings: false,
})

Promise.onPossiblyUnhandledRejection(err => {
  throw err
})

global.Promise = Promise

// tslint:disable-next-line:no-floating-promises
;(async () => {
  await import('app')
})()
