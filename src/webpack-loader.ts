import compileSFCTemplate from './core/compiler'

export default function (this: any, content: any) {

  const filePath = this.resourcePath
  const code = compileSFCTemplate(content, filePath)
  return code
}