import Vue from 'vue'
import VueI18n from 'vue-i18n'
import KeenUI from 'keen-ui'
import 'material-design-icons/iconfont/material-icons.css'
import 'keen-ui/dist/keen-ui.css'
import VueRouter from 'vue-router'
import { routes } from './routes'

import App from './App'
import { messages } from './data/locales'

Vue.config.productionTip = false

Vue.use(VueI18n)
Vue.use(KeenUI)
Vue.use(VueRouter)

// Create VueI18n instance (the name must be i18n)
const i18n = new VueI18n({
  locale: 'es',
  messages
})

// Vue router
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  data: {
    version: '1.0',
    rootData: '99'
  },
  beforeCreate() {
    window.console.log('Esto se ejecuta ANTES de crear la instancia Vue.')
  },
  created() {
    window.console.log('Esto se ejecuta cuando se crea la instancia Vue.')
  },
  beforeMount() {
    window.console.log('Esto se ejecuta ANTES de montar el elemento.')
  },
  mounted() {
    window.console.log('Esto se ejecuta DESPUES de montar el elemento.')
  },
  methods: {
    prueba: () => {
      window.console.log('haz algo')
    }
  },
  computed: {
    unaComputed: () => {
      return this.rootData
    }
  },
  render: h => h(App),
  template: '<App/>',
  components: { App }
})
