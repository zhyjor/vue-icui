<template>
  <div class="ptw-wrapper">
    <div class="ptw-img-placeholder"></div>
    <div class="ptw-img-wrapper">
      <img-list></img-list>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import imgList from '../components/twImg.vue'

  export default {
    name: 'v-imgList',
    data () {
      return {}
    },
    components: {
      imgList
    }
  }

</script>

<style scoped lang="scss">
  .ptw-wrapper {
    display: block;
    overflow: hidden;
    z-index: 0;
    flex-direction: column;
    align-items: stretch;
    position: relative;
    .ptw-img-placeholder {
      padding-bottom: 56.25%;
      display: block;
      width: 100%;
    }
    .ptw-img-wrapper {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: block;
      height: 100%;
      width: 100%;
    }
  }
</style>
