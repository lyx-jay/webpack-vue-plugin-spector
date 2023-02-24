import { getCurrentEnv } from './common/utils'

const currentLoaderPath = __filename
const ENV_KEY_MAP = {
  'mac': 'MetaLeft',
  'win': "ControlLeft"
}
const RANDOM_NUMBER: string = (Math.random() * 1000).toFixed()
const EXPORT_DEFAULT_NAME = `init${RANDOM_NUMBER}`

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
  import ${EXPORT_DEFAULT_NAME} from 'webpack-vue-plugin-inspector/client'

  ${EXPORT_DEFAULT_NAME}({
    key: '${key}'
  })
  `
  return injectedContent + content
}