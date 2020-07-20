import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import router from '@/router'
import store from '@/store'
import ApiService from "./common/api.service";
import '@/assets/css/base.css'

Vue.config.productionTip = false

ApiService.init();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
