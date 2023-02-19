import type { RequestHandler, Response } from 'express'


/**
 * webpack 的中间件，基于 express
 * @param req 请求
 * @param res 响应
 * @param next 下一个中间件
 */
export const launchEditorMiddleware: RequestHandler = (req, res, next) => {

  // if (req.url.startsWith(OPEN_CODE_API)) {

  // }
  // handleOpenFileRequest(req.query as Record<string, string | undefined>, res)

}


