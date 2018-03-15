<template>
  <div class="mf-loading-container">
    <img src="../../assets/images/loading.gif">
  </div>
</template>
<script type="text/ecmascript-6">
  import {create} from '../../utils'

  export default create({
    name: 'v-icui-loading'
  })
</script>
<style lang="scss">
  .mf-loading-container {
    img {
      width: 20px;
      height: 20px;
      display: block;
    }
  }
</style>
