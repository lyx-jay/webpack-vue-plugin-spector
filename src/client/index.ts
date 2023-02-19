import {
  InitTypes,
  RequestServiceOptions
} from '../types'
import {
  InjectColumnName,
  InjectLineName,
  InjectPathName
} from '../loader/constant'
import { OPEN_CODE_API } from '../unplugin/constant'
// function init(options = {}) {
//   let key: string = ''
//   document.addEventListener('keydown', (e) => {
//     key = e.code
//   })
//   document.addEventListener('click', (e) => {

//   })
// }

/**
 * 请求打开代码编辑器
 * @param filePathId 页面元素代码路径 hash id
 * @param componentFilePathId 页面元素对应的组件文件路径 hash id
 */
const requestService = (options: RequestServiceOptions) => {
  const { path, row, col } = options
  const { origin } = window.location
  // console.log('origin', origin)
  // 发送请求
  fetch(`${origin}${OPEN_CODE_API}=${path}:${row}:${col}`).catch((error) => {
    console.error('dom-to-code: ', error)
  })
}

const init: InitTypes = (options) => {
  let key = ''
  const targetKey = options.key
  document.addEventListener('keydown', (e) => {
    key = e.code
  })
  document.addEventListener('click', (e) => {
    if (key === targetKey) {
      e.preventDefault()
      e.stopImmediatePropagation()
      e.stopPropagation()

      const dom = e.target as Element
      const row = dom!.getAttribute(InjectLineName) as string
      const col = dom!.getAttribute(InjectColumnName) as string
      const path = dom!.getAttribute(InjectPathName) as string

      console.log(
        `
        row: ${row},
        col :${col},
        path: ${path}
        `
      )
      // 执行发送请求函数
      requestService({ row, col, path })
    }
  })
}

export default init