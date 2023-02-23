import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['src/webpack', 'src/webpack-loader', 'src/client'],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
    cjsBridge: true,
  }
})
