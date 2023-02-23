import { getCurrentEnv } from './common/utils'


const currentLoaderPath = __filename
const ENV_KEY_MAP = {
  'mac': 'MetaLeft',
  'win': "ControlLeft"
}


export default function (this: any, content: any) {

  let key = ENV_KEY_MAP[getCurrentEnv()]

  this.loaders.forEach((loader: any) => {
    if (loader.path === currentLoaderPath) {
      if (loader.options.key) {
        key = loader.options.key
      }
      return
    }
  })
  const injectedContent = `
  import init from 'webpack-vue-plugin-inspector/client'

  init({
    key: '${key}'
  })
  `
  return injectedContent + content
}