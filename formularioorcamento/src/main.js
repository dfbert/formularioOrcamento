import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-select/dist/vue-select.css';

import VueTheMask from 'vue-the-mask'
import vSelect from 'vue-select'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueTheMask)
Vue.component('v-select', vSelect)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')



