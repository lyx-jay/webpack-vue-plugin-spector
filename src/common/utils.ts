
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