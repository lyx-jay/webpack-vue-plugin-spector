import { parse } from '@vue/compiler-sfc';
import injectDom from './utils';

export default function (this: any, content: any) {

  // absolute path
  const filePath = this.resourcePath
  const params = new URLSearchParams(this.resource)
  // module type
  const type = params.get('type')
  if (type === 'template') {
    const contentAfterParased = parse(content)
    const domAst = contentAfterParased.descriptor.template!.ast
    // original template
    const originalTemplate = domAst.loc.source
    // new template
    const newTemplate = injectDom(domAst, filePath, originalTemplate)
    return content.replace(originalTemplate, newTemplate)
  } else {
    return content
  }
}