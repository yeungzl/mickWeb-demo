const path = require('path');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map', // 开启该选项时，会暴露源码 inline-source-map

  /** devServer  会写入到内存中，所以不需要打包我们就可以运行 */
  devServer: { // 启动server的路径 (ps:底层也是使用了middleware来做的热启动)
    static: false,
    // static: path.resolve(__dirname, 'public'), // 该配置项允许配置从目录提供静态文件的选项（默认是 'public' 文件夹）。将其设置为 false 以禁用
    port: '8088', // dev-server 端口
    hot: false, // 热更新
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        pathRewrite: { '^/api/publicApi': '' },
        changeOrigin: true, // target是域名的话，需要这个参数，
        secure: false, // 设置支持https协议的代理
      },
    },
  },

  /** 这里控制控制台的日志输出 */
  stats: {
    all: undefined,
  },
});
