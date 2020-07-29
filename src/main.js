import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import Vuex from 'vuex'
import store from './store/store'

Vue.config.productionTip = false

Vue.use(Vuex)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(Antd);

new Vue({
  render: h => h(App),
  store: store,
}).$mount('#app')
