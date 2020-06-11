'use strict'
const path = require('path')
const { publicPath,
    assetsDir,
    outputDir,
    lintOnSave,
    devPort,
    title } = require("./src/config/settings")
const { version, author } = require("./package.json");
const time = require("dayjs")().format("YYYY-M-D HH:mm:ss");
process.env.VUE_APP_TITLE = title || "himall";
process.env.VUE_APP_AUTHOR = author;
process.env.VUE_APP_UPDATE_TIME = time;
process.env.VUE_APP_VERSION = version;

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath,
    assetsDir,
    outputDir,
    lintOnSave,
    devServer: {
        /* 自动打开浏览器 */
        open: true,
        // host: '0.0.0.0',
        hot: true,
        disableHostCheck: true,
        port: devPort,
        overlay: {
            warnings: false,
            errors: true
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    },
    chainWebpack(config) {
        //分包
        config.optimization.splitChunks({
            chunks: "all",
            cacheGroups: {
                libs: {
                    name: "chunk-libs",
                    test: /[\\/]node_modules[\\/]/,
                    priority: 10,
                    chunks: "initial",
                },
                elementUI: {
                    name: "chunk-elementUI",
                    priority: 20,
                    test: /[\\/]node_modules[\\/]_?element-ui(.*)/,
                },
                commons: {
                    name: "chunk-commons",
                    test: resolve("src/components"),
                    minChunks: 3,
                    priority: 5,
                    reuseExistingChunk: true,
                },
            },
        });
        config.optimization.runtimeChunk("single");
        //vue-cli默认情况下会使用 url-loader 对svg进行处理，会将它放在/img 目录下，所以这时候我们引入svg-sprite-loader 会引发一些冲突。
        //使用 webpack 的 exclude 和 include ，让svg-sprite-loader只处理你指定文件夹下面的 svg，这样就避免了冲突，页面无法引用到
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    },
    pluginOptions: {
        //配置全局css变量
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [
                //这个是加上自己的路径，
                //注意：试过不能使用别名路径
                path.resolve(__dirname, 'src/styles/variables/*.less'),
            ]
        }
    }
}