import { DOM_ATTR } from "./constant"
/**
 * 判断当前机器是否为mac
 * @returns 
 */
export const getCurrentEnv = function () {
  const platform = process.platform
  switch (platform) {
    case 'darwin':
      return 'mac'
    case 'win32':
      return 'win'
  }
  return 'win'
}


/**
 * return file info
 * @param line row number
 * @param column column number
 * @param path file path
 * @returns 
 */
export function createDomInfo(line: number, column: number, path: string) {
  return ` ${DOM_ATTR}='${path}:${line}:${column}'`
}