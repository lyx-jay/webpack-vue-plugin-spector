import HtmlWebpackPlugin from 'html-webpack-plugin'
class HelloCompilationPlugin {
  apply(compiler) {
    // 指定一个挂载到 compilation 的钩子，回调函数的参数为 compilation 。
    compiler.hooks.compilation.tap('HelloCompilationPlugin', (compilation) => {
      // 现在可以通过 compilation 对象绑定各种钩子
      compilation.hooks.optimize.tap('HelloCompilationPlugin', () => {
        console.log('资源已经优化完毕。');
      });
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tap('myplugin', (data, cb) => {
        // data.html += 'The Magic Footer'
        const code = `<div>lalalllaallaa</div>`
        data.html = data.html.replace('</body>', `${code}\n</body>`);
        // Tell webpack to move on
        cb(null, data)

      })
    });
  }
}

module.exports = HelloCompilationPlugin;

// module.exports = HelloWorldPlugin;

