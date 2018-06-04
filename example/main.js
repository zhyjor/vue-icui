import Vue from 'vue'
import icuiVue from '../src/index'
// import '../src/style.css'
import App from './app.vue'
import './assets/style/demo.scss'
import './assets/iconfont/iconfont.css'
// import IScrollView from 'vue-iscroll-view'
import router from './router'
import i18n from './language'

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(icuiVue)
// Vue.use(IScrollView, IScroll)

router.afterEach((to) => {
  document.title = to.meta.title
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  render: h => h(App),

  router,

  data () {
    return {
      transitionName: 'slide-right'
    }
  },

  methods: {
    message (msg) {
      // WeVue.Toast(msg)
    }
  },

  watch: {
    '$route' (to, from) {
      this.transitionName = from.name === 'index' ? 'slide-left' : 'slide-right'
    }
  }
})
