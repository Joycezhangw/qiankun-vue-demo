/**
 * 统一引入的外部插件、样式、服务等
 */
import './core/install'
//导入 svg 图标
import './icons'
import { vueRender } from "./core/render"
/**
 * 启动微前端
 */
import startQiankun from './core/registerMicroApps'

startQiankun([
    {
        name: 'subapp-test',
        module: 'subapp-test',
        devEntry: 'http://localhost:8082',
        depEntry: "http://www.baidu.com",
        routerBase: '/subapp-test',
    }
])
vueRender({}, true)
