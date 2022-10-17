const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/': {
        target: 'http://s3gallery:8000',
        changeOrigin: true
      },
    }
  }
})
