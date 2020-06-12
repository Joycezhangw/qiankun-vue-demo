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
    ]);
    return start();
}
