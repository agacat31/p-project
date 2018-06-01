// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import VueSession from 'vue-session'
import 'vuetify/dist/vuetify.min.css'
import 'vue2-animate/dist/vue2-animate.min.css'

// Import Store
import store from './store/index'

Vue.use(Vuetify)
Vue.use(VueAxios, Axios)
Vue.use(Vuex)
Vue.use(VueSession)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
