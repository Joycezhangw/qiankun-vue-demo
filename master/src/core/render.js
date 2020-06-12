import Vue from "vue"
import router from "../router"
import store from "../store"

import { registerMicroApps, start } from 'qiankun';

import App from "../App.vue"


export function vueRender() {
    Vue.config.productionTip = false

    new Vue({
        router,
        store,
        render: h => h(App),
    }).$mount('#main-container')

    registerMicroApps([
        {
            name: 'subapp-test',
            entry: 'http://localhost:8082',
            container: '#appContainer',
            activeRule: '/subapp-test',
            props: { data: { store, router } }
        }
    ], {
        //qiankun 生命周期钩子 - 加载前
        beforeLoad: [
            app => {
                //加载子应用前，加载进度条
                console.log("[qiankun]before load", app);
            }
        ],
        beforeMount: [
            app => {
                //加载子应用前，加载进度条
                console.log("[qiankun]before mount", app);
            }
        ],
        //加载子应用完后，进度条加载完成
        afterUnmount: [
            app => {
                console.log("[qiankun]after unload", app);
            }
        ]
    });
    return start({ prefetch: true, sandbox: { strictStyleIsolation: true } });
}
