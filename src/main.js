// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import qs from 'qs'

import Vant from 'vant'
import 'vant/lib/index.css'

import lib from '../static/main.js'

axios.interceptors.request.use(config => {
    if (config.method == 'post') config.data = qs.stringify(config.data);
    return config
}, error => {
    return Promise.reject(error)
})

import fn from './lib/util.js'

Vue.prototype.lib = lib
Vue.prototype.fn = fn
Vue.prototype.axios = axios
Vue.prototype.baseUrl = "http://192.168.1.168:9102/"
Vue.use(Vant)

Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//     // ...
//     let loginState = localStorage.loginState
//     if (!loginState) {
//        fn.login()
//     }
// })

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    created() {
        fn.login()
    },
    components: { App },
    template: '<App/>'
})
