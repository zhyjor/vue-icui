import Panel from './panel.vue'


Panel.install = function (Vue) {
  Vue.component(Panel.name, Panel)
}

export default Panel
