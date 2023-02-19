import { launchEditorMiddleware } from './middleware'
export const domToCodeDevServerV5 = {
  // for webpack 5
  setupMiddlewares: (middlewares: any[] = []): any[] => {
    return [launchEditorMiddleware, ...middlewares]
  },
}

