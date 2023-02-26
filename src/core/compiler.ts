import { parse, transform } from '@vue/compiler-dom'
import MagicString from 'magic-string'
import { DOM_ATTR } from '../common/constant'
import { createDomInfo } from '../common/utils'

const EXCLUDE_TAG = ['template', 'script', 'style']

/**
 * compile vue sfc template
 * @param code 
 * @param path 
 * @returns 
 */
export default function compileSFCTemplate(code: string, path: string) {
  const s = new MagicString(code)
  const ast = parse(code, { comments: true })
  transform(ast, {
    nodeTransforms: [
      (node) => {
        if (node.type === 1) {
          if ((node.tagType === 0) && !EXCLUDE_TAG.includes(node.tag)) {
            if (node.loc.source.includes(DOM_ATTR)) { return }
            const insertPosition = node.loc.start.offset + node.tag.length + 1
            const { line, column } = node.loc.start
            const content = `${createDomInfo(line, column, path)}`

            s.prependLeft(insertPosition, content)
          }
        }
      }
    ]
  })
  return s.toString()
}