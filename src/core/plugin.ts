import { createUnplugin } from 'unplugin'
import path from 'path'

const pathResolve = (...paths: string[]) => path.resolve(__dirname, ...paths)

export const unplugin = createUnplugin((options: any) => {
  return {
    name: 'unplugin-webpack-vue',
    webpack(compiler) {
      let key: string = ''
      const isWebpack5 = Number(compiler.webpack?.version?.[0]) >= 5 || false
      if (options && options.key) {
        key = options.key
      }
      // 向DOM中注入自定义属性
      compiler.options.module.rules.push({
        test: /\.vue$/,
        use: [
          {
            loader: pathResolve('./webpack-loader.cjs')
          }
        ]
      })
      // // 向main.js中添加脚本
      compiler.options.module.rules.push({
        test: /main\.js/,
        use: [
          {
            loader: pathResolve('./client-loader.cjs'),
            options: {
              key,
              version: isWebpack5 ? 'v5' : 'v4'
            }
          }
        ]
      })
    }
  }
})
