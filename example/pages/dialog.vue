<template>
  <div class="page dialog js_show">

    <div class="bd spacing">
      <v-icui-button type="primary" @click="showDialog(1)">点击弹出Dialog样式一</v-icui-button>
      <v-icui-button type="primary" @click="showDialog(2)">点击弹出Dialog样式二</v-icui-button>
    </div>
    <v-icui-dialog
      v-show="dialog1Show"
      type="confirm"
      title="弹窗标题"
      confirm-button="确认"
      cancel-button="取消"
      @weui-dialog-confirm="handleDialogAction('确定', 1)"
      @weui-dialog-cancel="handleDialogAction('取消', 1)">
      自定义弹窗内容
      <br>
      ...
    </v-icui-dialog>
    <v-icui-dialog
      v-show="dialog2Show"
      type="alert"
      title=""
      @weui-dialog-confirm="handleDialogAction('确定', 2)">
      弹窗内容，告知当前页面信息等
    </v-icui-dialog>
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
        this[`dialog${id}Show`] = true
      },

      handleDialogAction (action, id) {
//        if (action === '确定') {
        this[`dialog${id}Show`] = false
//        }
      }
    }
  }
</script>
