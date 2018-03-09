// This file is auto gererated by build/bin/build-entry.js
import 'weui/dist/style/weui.min.css'
import './style/icui.min.css'
import Actionsheet from './components/actionsheet'
import Button from './components/button'
import Cell from './components/cell'
import Group from './components/group'
import Lazyload from './components/lazyload'
import Scroller from './components/scroller'

const version = '1.0.0'
const components = [
  Actionsheet,
  Button,
  Cell,
  Group,
  Scroller
]

const install = (Vue, config = {}) => {
  components.forEach(Component => {
    Vue.use(Component)
  })
  // Vue.use(InfiniteScroll)
  Vue.use(Lazyload, {
    loading: require('./assets/loading-spin.svg'),
    attempt: 3,
    ...config.lazyload
  })
 // Vue._IScroll = config.IScroll || config
 // Vue.$dialog = Vue.prototype.$dialog = Dialog
 // Vue.$toast = Vue.prototype.$toast = Toast
 // Vue.$toptips = Vue.prototype.$toptips = TopTips
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  version,
  Actionsheet,
  Button,
  Cell,
  Group,
  Lazyload,
  Scroller
}

export default {
  install,
  version
}
