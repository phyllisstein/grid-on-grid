/* eslint-disable sort-keys, indent */

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const Config = require('webpack-chain')
const { readFileSync } = require('fs')
const HTMLPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const client = new Config()

const banner = readFileSync('config/banner.txt', { encoding: 'utf8' })

client
  .set('name', 'client')
  .context(path.resolve('src'))
  .mode('development')
  .devtool('cheap-module-source-map')

client
  .entry('main')
    .add('./index')

client.output
  .chunkFilename('js/[name].js')
  .filename('js/[name].js')
  .path(path.resolve('dist/public'))
  .pathinfo(false)
  .publicPath('/')

client.module
  .rule('babel')
  .test(/\.tsx?$/)
  .exclude
    .add(/node_modules/)
    .add(/vendor/)
    .end()
  .use('babel')
    .loader('babel-loader')
    .options({
        babelrc: false,
        presets: [
          ['@babel/env', {
            exclude: [
              'transform-async-to-generator',
              'transform-regenerator',
            ],
            targets: {
              browsers: ['last 2 versions'],
            },
            modules: false,
            loose: true,
            useBuiltIns: 'usage',
          }],
          '@babel/react',
          '@babel/typescript',
          ['@babel/stage-0', {
            decoratorsLegacy: true,
            loose: true,
          }],
        ],
        plugins: [
          'autobind-class-methods',
          ['module:fast-async', {
            compiler: {
              lazyThenables: true,
              parser: {
                sourceType: 'module',
              },
              promises: true,
              wrapAwait: true,
            },
            useRuntimeModule: true,
          }],
          'lodash',
          'ramda',
          'react-hot-loader/babel',
          ['styled-components', {
            displayName: true,
            ssr: true,
          }],
          'transform-promise-to-bluebird',
          ['@babel/transform-regenerator', {
            async: false,
            asyncGenerators: true,
            generators: true,
          }],
          '@babel/transform-runtime',
        ],
      })

client.module
  .rule('fonts')
    .test(/\.woff2?$/)
    .include
      .add(/vendor\/fonts/)
      .end()
    .use('url')
      .loader('url-loader')
      .options({
        limit: 4096,
        name: 'fonts/[name].[ext]',
      })

client.module
  .rule('images')
    .test(/\.(jpe?g|png|webp|ico)$/)
    .use('url')
      .loader('url-loader')
      .options({
        limit: 4096,
        name: 'img/[name].[ext]',
      })

client.module
  .rule('style-raw')
    .test(/\.css$/)
    .use('style')
      .loader('style-loader')
      .end()
    .use('css')
      .loader('css-loader')

client.module
  .rule('source')
  .test(/assets\/code/)
  .use('raw')
    .loader('raw-loader')

client.resolve
  .enforceExtension(false)
  .extensions
    .add('.js')
    .add('.jsx')
    .add('.ts')
    .add('.tsx')
    .end()
  .modules
    .add('src')
    .add('node_modules')
    .end()
  .alias
    .set('react', 'vendor/react')
    .set('react-dom', 'vendor/react-dom')

client
  .plugin('provide')
  .use(webpack.ProvidePlugin, [{ Promise: 'bluebird' }])

client
  .plugin('named-modules')
  .use(webpack.NamedModulesPlugin)

client
  .plugin('html')
  .use(HTMLPlugin, [{ inject: true, template: './index.tpl.html' }])

client
  .plugin('banner')
  .use(webpack.BannerPlugin, [{ banner, entryOnly: false, raw: true }])

client
  .plugin('case-sensitive-paths')
  .use(CaseSensitivePathsPlugin)

module.exports = client.toConfig()
