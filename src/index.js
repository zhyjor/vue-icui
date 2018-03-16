// This file is auto gererated by build/bin/build-entry.js
import 'weui/dist/style/weui.min.css'
import './style/icui.min.css'
import Actionsheet from './components/actionsheet'
import Bubble from './components/bubble'
import Button from './components/button'
import Cell from './components/cell'
import Checkbox from './components/checkbox'
import Dialog from './components/dialog'
import Group from './components/group'
import Icon from './components/icon'
import Lazyload from './components/lazyload'
import Loading from './components/loading'
import Picker from './components/picker'
import Picker2 from './components/picker2'
import Radio from './components/radio'
import Scroll from './components/scroll'

const version = '1.0.0'
const components = [
  Actionsheet,
  Bubble,
  Button,
  Cell,
  Checkbox,
  Dialog,
  Group,
  Icon,
  Loading,
  Picker,
  Picker2,
  Radio,
  Scroll
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
 Vue.$dialog = Vue.prototype.$dialog = Dialog
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
  Bubble,
  Button,
  Cell,
  Checkbox,
  Dialog,
  Group,
  Icon,
  Lazyload,
  Loading,
  Picker,
  Picker2,
  Radio,
  Scroll
}

export default {
  install,
  version
}
