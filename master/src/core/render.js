import Vue from "vue"
import router from "../router"
import store from "../store"

import App from "../app/App.vue"

export function vueRender() {
    Vue.config.productionTip = false

    return new Vue({
        router,
        store,
        render: h => h(App),
    }).$mount('#main-container')

}
