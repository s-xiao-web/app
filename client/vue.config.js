const path = require('path')
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/less/base.less')
      ]
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8888',
        ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  }
}
