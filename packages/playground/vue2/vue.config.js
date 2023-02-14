const { defineConfig } = require('@vue/cli-service')


module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('vue')
      .test(/\.vue$/)
      .use('@inspector/loader')
      .loader('@inspector/loader')
      .end();
  }
})
