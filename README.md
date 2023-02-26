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

* win(default): control(left) + click
* mac(default): command(left) + click

```js
const { webpackPlugin, pluginServerV4, pluginServerV5} = require('webpack-vue-plugin-inspector/webpack')

module.exports = defineConfig({
  ...
  devServer: {
    ...domToCodeDevServerV5
  },
  configureWebpack: {
    plugins: [
      webpackPlugin({})
    ]
  }
  // use custom key as shortcuts
  configureWebpack: {
    plugins: [
      webpackPlugin({
        key: 'your key shortcuts'
      })
    ]
  }
})
```

## Attention

You need to add environment variables in vscode