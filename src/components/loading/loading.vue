<template>
  <div class="icui-loading">
    <span class="icui-loading-spinners" :style="style">
      <i class="icui-loading-spinner" v-for="item in balde"/>
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'v-icui-loading'

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
</style>

