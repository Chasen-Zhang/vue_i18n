import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './assets/css/common.css'
import axios from 'axios'
import {getRequest,postRequest,uploadFileRequest} from './http'
import VueLocalStorage from 'vue-localstorage'
import i18n from './i18n/i18n';
Vue.use(VueLocalStorage);
/**
 * 兼容ie
 * */
import 'babel-polyfill'
import router from './router'
Vue.prototype.uploadFileRequest = uploadFileRequest;
Vue.prototype.getRequest = getRequest;
Vue.prototype.postRequest = postRequest;
Vue.prototype.axios = axios;
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App)
});
