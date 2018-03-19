<template>
  <div :class="'weui-dialog__' + type" v-show="isVisible">
    <div class="weui-mask"/>
    <div class="weui-dialog">
      <div class="weui-dialog__hd">
        <div class="weui-dialog__title">{{ title }}</div>
      </div>
      <div class="weui-dialog__bd">
        <slot>
          <span>{{ content }}</span>
        </slot>
      </div>
      <div class="weui-dialog__ft">
        <a
          v-if="type === 'confirm'"
          href="javascript:;"
          class="weui-dialog__btn weui-dialog__btn_default"
          @click="confirm('weui-dialog-cancel')">{{ cancelButton }}</a>
        <a
          href="javascript:;"
          class="weui-dialog__btn weui-dialog__btn_primary"
          @click="cancel('weui-dialog-confirm')">{{ confirmButton }}</a>
      </div>
    </div>
  </div>
</template>

<script>
  import apiMixin from '../../common/mixins/api'

  const EVENT_CONFIRM = 'confirm'
  const EVENT_CANCEL = 'cancel'
  export default {
    name: 'v-icui-dialog',
    mixins: [apiMixin],
    props: {
      /**
       * 对话框类型
       * alert: 提示框，只包含确定按钮（默认）
       * confirm: 询问框，包含确定和取消按钮
       */
      type: {
        type: String,
        required: false,
        default: 'alert'
      },

      /**
       * 对话框标题
       */
      title: {
        type: String,
        required: true
      },

      /**
       * content
       */
      content: {
        type: String,
        required: true
      },
      /**
       * 确定按钮名称
       */
      confirmButton: {
        type: String,
        required: false,
        default: '确定'
      },

      /**
       * 取消按钮名称
       */
      cancelButton: {
        type: String,
        required: false,
        default: '取消'
      }

    },
    data () {
      return {}
    },
    methods: {
      confirm (e) {
        this.hide()
        this.$emit(EVENT_CONFIRM, e)
      },
      cancel (e) {
        this.hide()
        this.$emit(EVENT_CANCEL, e)
      },
      dispathEventAndClose (event) {
        this.$emit(event)
      }
    }
  }
</script>
