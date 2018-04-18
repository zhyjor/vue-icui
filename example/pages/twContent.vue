<template>
  <div>
    <div class="twc-wrapper">
      <content-text></content-text>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import contentText from '../components/content-text.vue'

  export default {
    name: 'content',
    data () {
      return {}
    },
    components: {
      contentText
    }

  }
</script>

<style scoped lang="scss">

</style>
