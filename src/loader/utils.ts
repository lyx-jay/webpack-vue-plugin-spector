import { ElementNode } from '@vue/compiler-core/dist/compiler-core';
import {
  InjectColumnName,
  InjectLineName,
  InjectNodeName,
  InjectPathName
} from '../common/constant';

function injectDom(domAst: ElementNode, filePath: string, source: string) {

  if (domAst.type !== 1) { return source }
  if (domAst.children && domAst.children.length) {
    // 从最后一个子节点开始处理，防止同一行多节点影响前面节点的代码位置
    for (let i = domAst.children.length - 1; i >= 0; i--) {
      const node = domAst.children[i] as ElementNode;
      source = injectDom(node, filePath, source);
    }
  }
  const codeLines = source.split('\n'); // 把行以\n划分方便注入
  const line = domAst.loc.start.line; // 当前节点起始行
  const column = domAst.loc.start.column; // 当前节点起始列
  const columnToInject = column + domAst.tag.length; // 要注入信息的列(标签名后空一格)
  const targetLine = codeLines[line - 1]; // 要注入信息的行
  const nodeName = domAst.tag;
  const newLine =
    targetLine.slice(0, columnToInject) +
    ` ${InjectLineName}="${line}" ${InjectColumnName}="${column}" ${InjectPathName}="${filePath}" ${InjectNodeName}="${nodeName}"` +
    targetLine.slice(columnToInject);
  codeLines[line - 1] = newLine; // 替换注入后的内容
  source = codeLines.join('\n');
  return source
}

export default injectDom