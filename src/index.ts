import 'normalize.css'
import 'prismjs/components'
import 'prismjs/themes/prism-tomorrow.css'
import 'styles/reset.css'
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
