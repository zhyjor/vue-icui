import Dialog from './dialog.vue'
import createAPI from '../../common/helper/create-api'

function addDialog (Vue, Dialog) {
  createAPI(Vue, Dialog, ['type', 'title', 'confirmButton', 'cancelButton', 'content'], true)
}

Dialog.install = function (Vue) {
  Vue.component(Dialog.name, Dialog)
  addDialog(Vue, Dialog)
}

export default Dialog
