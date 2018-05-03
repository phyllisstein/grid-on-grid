#!/usr/bin/env node

const config = require('./webpack.config')
const serve = require('webpack-serve')
const webpack = require('webpack')

if (typeof PhusionPassenger !== 'undefined') {
  PhusionPassenger.configure({ autoInstall: false })
}

const {
  PORT = 3000,
} = process.env

const compiler = webpack(config)

serve({
  add(app) {
    if (typeof PhusionPassenger !== 'undefined') {
      app.listen('passenger')
    }
  },
  compiler,
  dev: {
    logLevel: 'silent',
    publicPath: '/',
    quiet: true,
  },
  host: '0.0.0.0',
  hot: {
    host: '0.0.0.0',
    hot: true,
  },
  logLevel: 'silent',
  port: typeof PhusionPassenger === 'undefined' ? PORT : 'passenger',
})
