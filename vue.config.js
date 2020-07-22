const path = require("path");
module.exports = {
  // 基础路径
  publicPath: process.env.NODE_ENV === "production" ? "" : "./",
  // 输出文件目录
  outputDir: process.env.NODE_ENV === "production" ? "dist" : "devdist",
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  // vue3.0 内置了 webpack 所有东西
  // webpack配置, see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: config => {
    // 图标
    config.resolve.symlinks(true);
    // const svgRule = config.module.rule('svg');
    // svgRule.uses.clear();
    // svgRule
    // .use('svg-sprite-loader')
    // .loader('svg-sprite-loader')
    // .options({
    //     symbolId: 'icon-[name]',
    //     include: ['./src/icons']
    // })
  },
  configureWebpack: config => {
    config.resolve = {
      // 配置解析别名
      extensions: [".js", ".json", ".vue"], // 自动添加文件吗后缀
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@c": path.resolve(__dirname, "./src/components")
      }
    };
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css 相关配置
  css: {
    // 是否使用 css 高分插件 ExtractTextplugin
    // extract: true,
    // 开启 CSS  source  maps?
    sourceMap: false,
    // css 预设器配置项
    loaderOptions: {
      scss: {
        prependData: `@import "./src/styles/main.scss";`
      }
    }
  },
  parallel: require("os").cpus().length > 1,
  // pwa 相关配置项
  pwa: {},
  // webpack-dev-server  相关配置
  devServer: {
    // option: false,  // 编译完成后是否自动打开网页
    // host: '0.0.0.0',  // 指定使用地址, localhost:0.0.0.0 表示可以被外界访问
    // port: 8080,  // 访问端口
    // https: false, // 编译失败时刷新页面
    // hot: true, // 开启热加载
    // hotOnly: false,
    // proxy: {
    //     [process.env.VUE_APP_API]: {
    //         target: process.env.VUE_API_DEV_TARGET, // API 服务器地址
    //         changeOrigin: true,
    //         pathRewrite: {
    //             [`^${process.env.VUE_APP_API}`]: ''
    //         }
    //     }
    // }
  },
  // 第三方插件配置
  pluginOptions: {}
};
