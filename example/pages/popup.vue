<template>
  <div class="buttons-big">
    <cube-popup type="my-popup" ref="myPopup">My Popup Content 1</cube-popup>
    <v-icui-button type="primary" @click="showPopup('myPopup')">Show Popup</v-icui-button>
    <cube-popup type="my-popup" ref="myPopup2" :mask="false">My content 2</cube-popup>
    <v-icui-button type="primary" @click="showPopup('myPopup2')">Show Popup -NO mask</v-icui-button>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        type: 'popup-dialog',
        mask: true
      }
    },
    methods: {
      showPopup (refId) {
        const components = this.$refs[refId]
        components.show()
        setTimeout(() => {
          components.hide()
        }, 50000)
      }
    }
  }

</script>

<style scoped lang="scss">
  .buttons-big {
    margin: 10px;
  }


</style>


<style lang="stylus" rel="stylesheet/stylus">
  .popup-view
    .content
      >
      div
        margin: 10px 0
  .cube-my-popup
    .cube-popup-center
      .cube-popup-content
        padding: 20px
    .cube-popup-content
      padding: 80px 20px
      color: #fff
      background-color: rgba(0, 0, 0, .8)
  .cube-extend-popup
    .cube-extend-popup-content
      padding: 20px
      color: #fff
      background-color: rgba(0, 0, 0, .8)
</style>
