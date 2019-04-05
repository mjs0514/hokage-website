'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
const env = require('./env')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: { // express와 연동을 위해 새롭게 추가한 부분, vue페이지에서 /service로 요청이 들어오면 3000/service을 프록시로 사용함
      '/service': {
        target: `http://${env.API_HOST}:${env.API_PORT}/service`,
        changeOrigin: true,
        pathRewrite: {
          '^/service': ''
        }
      }
    },

    // Various Dev Server settings
    host: env.HOST, // can be overwritten by process.env.HOST
    port: env.PORT, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    //index: path.resolve(__dirname, '../dist/index.html'),
    index: path.resolve(__dirname, '../../hokage-server/public/index.html'),

    // Paths
    //assetsRoot: path.resolve(__dirname, '../dist'),
    assetsRoot: path.resolve(__dirname, '../../hokage-server/public'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
