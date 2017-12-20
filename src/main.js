import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App'
import Messages from './data/locales'
import KeenUI from 'keen-ui'
import 'material-design-icons/iconfont/material-icons.css'
import 'keen-ui/dist/keen-ui.css'

Vue.use(VueI18n)
Vue.use(KeenUI)

Vue.config.productionTip = false

// Create VueI18n instance
const vueI18n = new VueI18n({
  locale: 'es',
  Messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vueI18n,
  render: h => h(App),
  template: '<App/>',
  components: { App }
})
