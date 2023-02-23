import { createUnplugin } from 'unplugin'
import { pathResolve } from '../utils'


export const unplugin = createUnplugin((options: any) => {
  return {
    name: 'unplugin-webpack-vue',
    webpack(compiler) {
      compiler.options.module.rules.push({
        test: /\.vue$/,
        use: [
          {
            loader: pathResolve('./webpack-loader.cjs')
          }
        ]
      })
    }
  }
})
