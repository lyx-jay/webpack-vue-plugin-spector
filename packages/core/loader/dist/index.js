// src/index.ts
var import_compiler_sfc = require("@vue/compiler-sfc");

// src/constant.ts
var InjectLineName = "_vc-row";
var InjectColumnName = "_vc-col";
var InjectPathName = "_vc-path";
var InjectNodeName = "_vc-node";

// src/utils.ts
function injectDom(domAst, filePath, source) {
  if (domAst.type !== 1) {
    return source;
  }
  if (domAst.children && domAst.children.length) {
    for (let i = domAst.children.length - 1; i >= 0; i--) {
      const node = domAst.children[i];
      source = injectDom(node, filePath, source);
    }
  }
  const codeLines = source.split("\n");
  const line = domAst.loc.start.line;
  const column = domAst.loc.start.column;
  const columnToInject = column + domAst.tag.length;
  const targetLine = codeLines[line - 1];
  const nodeName = domAst.tag;
  const newLine = targetLine.slice(0, columnToInject) + ` ${InjectLineName}="${line}" ${InjectColumnName}="${column}" ${InjectPathName}="${filePath}" ${InjectNodeName}="${nodeName}"` + targetLine.slice(columnToInject);
  codeLines[line - 1] = newLine;
  source = codeLines.join("\n");
  return source;
}
var utils_default = injectDom;

// src/index.ts
module.exports = function(content) {
  const filePath = this.resourcePath;
  const params = new URLSearchParams(this.resource);
  const type = params.get("type");
  if (type === "template") {
    const contentAfterParased = (0, import_compiler_sfc.parse)(content);
    const domAst = contentAfterParased.descriptor.template.ast;
    const originalTemplate = domAst.loc.source;
    const newTemplate = utils_default(domAst, filePath, originalTemplate);
    return content.replace(originalTemplate, newTemplate);
  } else {
    return content;
  }
};
