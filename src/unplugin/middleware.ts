import type { RequestHandler, Response } from 'express'
import type { IncomingMessage, ServerResponse } from 'http'
import { OPEN_CODE_API } from '../common/constant'
import launch from 'launch-editor'

/**
 * locate editor file by filePath
 * @param filePath request file path
 * @param res response
 */
export const openEditor = (filePath: string, res: Response | ServerResponse<IncomingMessage>) => {
  if (filePath) {
    filePath = filePath.replace(OPEN_CODE_API + '=', '')
    launch(filePath, () => {
      console.log('To specify an editor, specify the EDITOR env variable')
    })
    res.end(filePath)
  } else {
    res.statusCode = 500
    res.end('launch-editor-middleware: required query param "filePath" is missing.')
  }
}

/**
 * webpack 的中间件，基于 express
 * @param req 请求
 * @param res 响应
 * @param next 下一个中间件
 */
export const launchEditorMiddleware: RequestHandler = (req, res, next) => {

  if (req.url.startsWith(OPEN_CODE_API)) {
    openEditor(req.url, res)
  } else {
    next()
  }

}


