<template>
  <button
    class="icui-btn"
    :class="classObject"
    @click="handleClick"
    :disabled="disabled">
    <i class="icui-loading" v-if="isLoading"/>
    <slot/>
  </button>

</template>

<script type="text/ecmascript-6">
  import {create} from '../../utils'

  export default create({
    name: 'v-icui-button',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      isLoading: Boolean,
      disabled: Boolean,
      mini: Boolean,
      plain: Boolean
    },
    methods: {
      handleClick (event) {
        this.$emit('click', event)
      }
    },
    computed: {
      classObject () {
        let ret = {}

        let classType = this.plain ? `icui-btn_plain-${this.type}` : `icui-btn_${this.type}`
        let classDisabled = this.plain ? `icui-btn_plain-disabled` : 'icui-btn_disabled'

        ret[classType] = true
        ret[classDisabled] = this.disabled
        ret['icui-btn_loading'] = this.isLoading
        ret['icui-btn_mini'] = this.mini

        return ret
      }
    }
  })
</script>

<style scoped lang="scss">
</style>
