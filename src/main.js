import Vue from 'vue';
import App from './App';
import store from './store';
import VueRouter from 'vue-router-mp'
import bus from './eventBus';
import CommonGolbal from '../static/js/common.js';

Vue.config.productionTip = false;
App.mpType = 'app';

Vue.prototype.bus = bus;
Vue.prototype.$store = store;
Vue.use(VueRouter)
Vue.use(CommonGolbal);

const app = new Vue(App);
app.$mount();