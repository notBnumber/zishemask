import Vue from 'vue'
import App from '@/App'
import API from '@/http/api'
import store from '@/http/store'
import MpvueRouter from 'mpvue-router-patch'
import { pageTo } from '@/mixins/pageTo'
import { downRefresh } from '@/mixins/downRefresh'
import '@/assets/css/init.css'
import { $Toast } from '@/iView/base/index'

Vue.use(MpvueRouter);
Vue.prototype.$store=store;
Vue.mixin(pageTo)
Vue.mixin(downRefresh)
Vue.config.productionTip = false
Vue.prototype.$API = API
Vue.prototype.$Toast = $Toast

App.mpType = 'app'

const app = new Vue(App)
app.$mount()
