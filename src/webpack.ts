import { unplugin } from './core/plugin'
import { pluginServerV4, pluginServerV5 } from './core/devServer'

export {
  pluginServerV4,
  pluginServerV5
}

export const webpackPlugin = unplugin.webpack