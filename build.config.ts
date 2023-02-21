import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['src/client', 'src/loader', 'src/unplugin'],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
    cjsBridge: true,
  }
})
