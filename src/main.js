import Vue from 'vue'
import App from './App'
import CommonGolbal from '../static/js/common.js';

Vue.config.productionTip = false
App.mpType = 'app'

Vue.use(CommonGolbal);

const app = new Vue(App)
app.$mount()
