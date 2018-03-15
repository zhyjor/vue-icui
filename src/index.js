// This file is auto gererated by build/bin/build-entry.js
import './style/icui.min.css'
import Actionsheet from './components/actionsheet'
import Button from './components/button'
import Cell from './components/cell'
import Checkbox from './components/checkbox'
import Group from './components/group'
import Icon from './components/icon'
import Lazyload from './components/lazyload'
import Picker from './components/picker'
import Radio from './components/radio'
import Scroller from './components/scroller'

const version = '1.0.0'
const components = [
  Actionsheet,
  Button,
  Cell,
  Checkbox,
  Group,
  Icon,
  Picker,
  Radio,
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
  Checkbox,
  Group,
  Icon,
  Lazyload,
  Picker,
  Radio,
  Scroller
}

export default {
  install,
  version
}
