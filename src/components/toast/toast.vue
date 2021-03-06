<template>
  <transition name="icui-toast-fade">
    <v-icui-popup type="toast" :z-index="zIndex" :mask="mask" v-show="isVisible">
      <i v-show="!isLoading" class="icui-toast-icon" :class="iconClass"/>
      <v-icui-loading v-show="isLoading"/>
      <div v-show="txt" class="icui-toast-tip">{{ txt }}</div>
    </v-icui-popup>
  </transition>

</template>

<script type="text/ecmascript-6">
  import vIcuiLoading from '../loading/loading.vue'
  import vIcuiPopup from '../popup/popup.vue'
  import apiMixin from '../../common/mixins/api'

  const COMPONENT_NAME = 'v-icui-toast'

  export default {
    name: COMPONENT_NAME,
    mixins: [apiMixin],
    props: {
      type: {
        type: String,
        default: 'loading'
      },
      mask: {
        type: Boolean,
        default: false
      },
      txt: {
        type: String,
        default: ''
      },
      time: {
        type: Number,
        default: 1000
      },
      zIndex: {
        type: Number,
        default: 900
      }
    },
    computed: {
      iconClass () {
        const iconClass = {}
        const classMap = {
          correct: 'cubeic-right',
          error: 'cubeci-wrong',
          wran: 'cubeci-warn'
        }
        const icon = classMap[this.type]
        if (icon) {
          iconClass[icon] = true
        }
        return iconClass
      },
      isLoading () {
        return this.type === 'loading'
      }
    },
    methods: {
      show () {
        this.isVisible = true
        this.clearTimer()
        this.$nextTick(() => {
          if (this.time != 0) {
            this.timer = setTimeout(() => {
              this.hide()
            }, this.time)
          }
        })
      },
      hide () {
        this.isVisible = false
        this.clearTimer()
      },
      clearTimer () {
        clearTimeout(this.timer)
        this.timer = null
      }
    },
    components: {
      vIcuiLoading,
      vIcuiPopup
    }
  }

</script>

<style scoped lang="scss">

</style>

<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/style/variable.styl"
  .icui-toast{
    &.icui-popup{
      z-index: 900;
    }
    .icui-popup-content{
      display: flex;
      align-items: center;
      padding: 13px 16px;
      color: $toast-color;
      background-color: $toast-bgc;
      border-radius: 10px;
    }
  }
  .icui-toast-icon{
    width: 24px;
    height: 24px;
    font-size: $fontsize-large-xxx;
  }

  .icui-toast-tip{
    line-height: 20px;
    font-size: $fontsize-medium;
    max-width: 12em;
    max-height: 40px;
    overflow: hidden;
    margin-left: 8px;
  }


  .icui-toast-fade-enter-active{
    animation: toast-in .2s;
  }

  .icui-toast-fade-leave-active{
    animation: toast-out .2s;
  }


  @keyframes toast-in{
    0%{
      opacity: 0;
    }

    100%{
      opacity: 1;
    }
  }



  @keyframes toast-out{
    0%{
      opacity: 1;
    }

    100%{
      opacity: 0;
    }

  }

</style>

