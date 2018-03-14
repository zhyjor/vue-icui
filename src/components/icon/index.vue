<template>
  <span style="display: inline-block;position: relative;">
    <img :src="imgPath" alt="" class="icui-tabbar_icon-icon">
    <span class="icui-badge icui-badge_dot" style="position: absolute;top: 0;right: -6px;" v-show="isShow"/>
  </span>
</template>

<script type="text/ecmascript-6">
  import {create} from '../../utils'

  export default create({
    name: 'v-icui-icon',
    props: {
      isShow: {
        type: Boolean,
        default: false,
        required: true
      },
      imgPath: {
        type: String,
        default: '../../assets/images/personal_info.png',
        required: true
      }
    }
  })
</script>

<style scoped lang="scss">
</style>
