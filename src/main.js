import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueObserveVisibility from 'vue-observe-visibility'

require('../node_modules/normalize.css/normalize.css')

Vue.use(VueObserveVisibility)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
