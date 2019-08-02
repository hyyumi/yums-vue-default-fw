import 'babel-polyfill'

import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './vuex/store'

import 'normalize.css'
import './styles/index.scss'

import i18n from './languages'
import './routes/routerGuard'

// if firebas sdk used
// import './plugins/firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
