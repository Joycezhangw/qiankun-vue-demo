import { registerMicroApps, runAfterFirstMounted, addGlobalUncaughtErrorHandler, start } from "qiankun";
import router from "../router"
import store from "../store"


/**
 * @name 声明子应用挂载dom，如果不需要做keep-alive，则只需要一个dom即可；
 */
const appContainer = "#subapp-viewport";

const startQiankun = (microApps) => {
    let apps = [];//子应用数组
    // let defaultApp = null;//默认注册应用路由前缀
    let isDev = process.env.NODE_ENV === 'development'; // 根据开发环境|线上环境加载不同entry
    microApps.forEach(app => {
        apps.push({
            name: app.module,
            entry: isDev ? app.devEntry : app.depEntry,
            container: app.container ? app.container : appContainer,
            activeRule: app.routerBase,
            props: { data: { store, router }, routerBase: app.routerBase }
        })
    })

    /**
     * @name 注册子应用
     * @param {Array} list subApps
     */
    registerMicroApps(
        apps,
        {
            //qiankun 生命周期钩子 - 加载前
            beforeLoad: [
                app => {
                    console.log('[qiankun] before load %c%s', 'color: green;', app.name);
                },
            ],
            beforeMount: [
                app => {
                    console.log('[qiankun] before mount %c%s', 'color: green;', app.name);
                },
            ],
            //qiankun加载子应用完后，进度条加载完成
            afterUnmount: [
                app => {
                    console.log('[qiankun] after unmount %c%s', 'color: green;', app.name);
                },
            ],
        },
    )
    /**
     * 添加全局的未捕获异常处理器
     */
    addGlobalUncaughtErrorHandler((event) => {
        console.log('[qiankun] addGlobalUncaughtErrorHandler', event);
        const { msg } = event
        // 加载失败时提示
        if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
            console.log("[qiankun] 微应用加载失败，请检查应用是否可运行");
        }
    })
    /**
     * @description 设置哪个子应用程序在主加载后默认处于活动状态
     * @param defaultAppLink: string 跳转链接
     */
    // setDefaultMountApp('/');

    /**
     * @description 微前端启动进入第一个子应用后回调函数
     * @param 要执行的函数
     */
    runAfterFirstMounted(() => console.info('first app mounted'));

    /**
     * @description 启动微前端
     * @param prefetch 是否在第一次安装子应用程序后预取子应用程序的资产,默认为 true
     * @param jsSandbox 是否启用沙盒，当沙盒启用时，我们可以保证子应用程序是相互隔离的,默认为 true
     * @param singular 是否在一个运行时只显示一个子应用程序，这意味着子应用程序将等待挂载，直到卸载之前,默认为 true
     * @param fetch 设置一个fetch function,默认为 window.fetch
     */
    start({ prefetch: true, sandbox: { strictStyleIsolation: true } });

}

export default startQiankun;