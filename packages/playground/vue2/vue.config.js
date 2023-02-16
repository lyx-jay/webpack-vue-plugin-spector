const InspectorPlugin = require('@webpack-vue-plugin-inspector/plugin')
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new InspectorPlugin()]
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .test(/\.vue$/)
      .use('@webpack-vue-plugin-inspector/loader')
      .loader('@webpack-vue-plugin-inspector/loader')
      .end();
    // config.plugin('@webpack-vue-plugin-inspector/plugin')
    //   .use(new InspectorPlugin())
  }
})
