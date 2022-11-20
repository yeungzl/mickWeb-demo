const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputPackageName = path.join(__dirname, './dist');

module.exports = {
  mode: 'production',
  entry: {
    shared: 'lodash', // 共享lodash模块防止重复打包
    index: {
      /** 启动时需加载的模块 */
      import: './src/index.js',
    },
    app1: {
      import: './src/app1.js',
      /**
       * 当前入口文件依赖的入口文件，即必须在入口文件被加载之前加载依赖的入口文件
       * 即：这里待index构建完成后再启动app1的构建
       * 同时这里不能循环引用
       */
      dependOn: 'index',
    }
  },
  output: {
    path: path.resolve(__dirname, outputPackageName),
    /**
     * [contenthash] substitution 将根据资源内容创建出唯一 hash。当资源内容发生变化时，[contenthash] 也会发生变化。
     */
    filename: '[name].[contenthash].bundle.js',
    clean: true, // true: 每次build时，先清除掉现有的输出文件夹
    publicPath: '/', // webpack-dev-middleware 我们将会在 server 脚本使用 publicPath
  },
  devtool: 'source-map', // 开启该选项时，会暴露源码 inline-source-map
  devServer: {
    static: `${outputPackageName}`, // 启动server的路径 (ps:底层也是使用了middleware来做的热启动)
    port: '8088', // dev-server 端口
    hot: false, // 热更新
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        pathRewrite: {'^/api/publicApi' : ''},
        changeOrigin: true,     // target是域名的话，需要这个参数，
        secure: false,          // 设置支持https协议的代理
      },
    },
  },
  optimization: {
    /**
     * 这里是为了解决代码分离问题
     * single 来为所有 chunk 创建一个 runtime bundle
     */
    runtimeChunk: 'single',
    /** 可以将公共的依赖模块提取到已有的入口 chunk 中，
     * 或者提取到一个新生成的 chunk。
     * 让我们使用这个插件，将之前的示例中重复的模块（第三方库等）去除，
    */
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    /** loader的加载是从右向左的（从后到前）*/
    rules: [
      {
        test: /\.css$/i,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    /** 打包后该插件会自动为我们生成一个HTML文件 */
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  // 配置模块如何解析
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
