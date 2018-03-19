<template>
  <div class="page dialog js_show">

    <div class="bd spacing">
      <v-icui-button type="primary" @click="showDialog(1)">点击弹出Dialog样式一</v-icui-button>
      <v-icui-button type="primary" @click="showDialog(2)">点击弹出Dialog样式二</v-icui-button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialog1Show: false,
        dialog2Show: false
      }
    },

    methods: {
      showDialog (id) {
        this.dialog = this.$createDialog({
          type: 'confirm',
//          icon: 'cubeic-alert',
          title: '我是标题',
          content: '我是内容'
        })
        this.dialog.show()
      },

      handleDialogAction (action, id) {
//        if (action === '确定') {
        this[`dialog${id}Show`] = false
//        }
      }
    }
  }
</script>
