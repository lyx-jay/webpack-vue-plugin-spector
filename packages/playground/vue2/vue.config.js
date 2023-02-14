const { defineConfig } = require('@vue/cli-service')


module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('vue')
      .test(/\.vue$/)
      .use('@webpack-vue-plugin-inspector/loader')
      .loader('@webpack-vue-plugin-inspector/loader')
      .end();
  }
})
