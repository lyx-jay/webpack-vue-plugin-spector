<div align="center">
  <div align="center">
    <h1>webpack-vue-plugin-inspector</h1>
    <p>Help you quickly locate code in IDE</p>
  </div>
</div>

## Install

```bash
# yarn
yarn add webpack-vue-plugin-inspector -D

# npm
npm install webpack-vue-plugin-inspector -D
```

## Usage

only support webpack as so far

#### First, add configure in `vue.config.js`

  ```
const { domToCodeDevServerV5 } = require('webpack-vue-plugin-inspector/unplugin')

module.exports = defineConfig({
  ...
  devServer: {
    ...domToCodeDevServerV5
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .test(/\.vue$/)
      .use('webpack-vue-plugin-inspector/loader')
      .loader('webpack-vue-plugin-inspector/loader')
      .end();
  }
})
  ```


#### Second, add init function in `src/main.js`

```js
import init from 'webpack-vue-plugin-inspector/client'

init({
  key: 'custom-key'
})
```

#### Third, press custom-key and click(use left mouse button) at the same time


## Attention

You need to add environment variables in vscode