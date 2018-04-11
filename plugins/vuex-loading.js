import Vue from 'vue'
import VueLoading from 'vuex-loading'

// Vue.use(VueLoading, {useVuex: true})
Vue.use(VueLoading)

export default ({ app }, inject) => {
  // Set `i18n` instance on `app`
  // This way we can use it in middleware and pages `asyncData`/`fetch`
  app.vueLoading = new VueLoading({
    /* `VueI18n` options... */
    registerComponents: false
  })
}