import Toast from './toast.vue'
import createAPI from '../../common/helper/create-api'

function addToast (Vue, Toast) {
  createAPI(Vue, Toast, [], true)
}

Toast.install = function (Vue) {
  Vue.component(Toast.name, Toast)
  addToast(Vue, Toast)
}

export default Toast
