import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['src/webpack', 'src/webpack-loader', 'src/client', "src/client-loader"],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
    cjsBridge: true,
  }
})
