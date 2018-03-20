<template>
  <div class="cube-loading">
    <span class="cube-loading-spinners" :style="style">
      <i class="cube-loading-spinner" v-for="item in balde"/>
    </span>
  </div>

</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'icui-v-loading'

  export default {
    name: COMPONENT_NAME,
    data () {
      return {
        balde: 12
      }
    },
    props: {
      size: {
        type: Number
      }
    },
    computed: {
      style () {
        if (!this.size) {
          return
        }
        const value = `${this.size}px`
        return {
          width: value,
          height: value
        }
      }
    }
  }

</script>

<style scoped lang="scss">
  @import '../../common/style/variable.scss';

</style>
