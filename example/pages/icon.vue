<template>
  <div>
    <h3>icon 组件测试</h3>
    <v-icui-icon :img-path="imgPath" :is-show="isShow"/>
  </div>
</template>

<script type="text/ecmascript-6">

  export default{
    data () {
      return {
        isShow: true,
        imgPath: '../assets/images/personal_info.png'
      }
    }
  }

</script>
