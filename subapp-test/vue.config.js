const path = require('path');
//这个 name 默认从 package.json 获取，可以自定义，只要和父项目注册时的 name 保持一致即可。
const { name } = require('./package');
const {
    assetsDir,
    outputDir,
    devPort,
    title } = require("./src/config/settings")
const { version, author } = require("./package.json");
const time = require("dayjs")().format("YYYY-M-D HH:mm:ss");
process.env.VUE_APP_TITLE = title || "himall";
process.env.VUE_APP_AUTHOR = author;
process.env.VUE_APP_UPDATE_TIME = time;
process.env.VUE_APP_VERSION = version;

function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    /**
     * You will need to set publicPath if you plan to deploy your site under a sub path,
     * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
     * then publicPath should be set to "/bar/".
     * In most cases please use '/' !!!
     * Detail: https://cli.vuejs.org/config/#publicpath
     */
    outputDir: outputDir,
    assetsDir: assetsDir,
    filenameHashing: true,
    // tweak internal webpack configuration.
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    devServer: {
        // host: '0.0.0.0',
        hot: true,
        disableHostCheck: true,
        port: devPort,
        overlay: {
            warnings: false,
            errors: true,
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    // 自定义webpack配置
    configureWebpack: {
        devtool: 'source-map',
        resolve: {
            alias: {
                '@': resolve('src'),
            },
        },
        output: {
            // 把子应用打包成 umd 库格式
            library: `${name}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${name}`,
        },
    },
};
