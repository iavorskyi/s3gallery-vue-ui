const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/': {
        target: 'https://www.google.com',
        changeOrigin: true
      },
    }
  }
})
