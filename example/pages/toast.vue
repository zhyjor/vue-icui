<template>
  <div class="buttons-big">
    <v-icui-button type="primary" @click="showToastTime">Toast - time 1s</v-icui-button>
    <v-icui-button type="primary" @click="showToastTime0">Toast - time 0</v-icui-button>
    <v-icui-button type="primary" @click="showToastMask">Toast- with mask</v-icui-button>
    <v-icui-button type="primary" @click="showToastType">Toast - type</v-icui-button>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      showToastTime () {
        this.toast = this.$createToast({
          time: 1000,
          txt: 'Toast time 1s'
        })
        this.toast.show()
      },
      showToastTime0 () {
        this.toast = this.$createToast({
          time: 0,
          txt: 'Toast time 0'
        })
        this.toast.show()
        setTimeout(() => {
          this.toast.hide()
        }, 2000)
      },
      showToastMask () {
        this.toast = this.$createToast({
          txt: 'Loading...',
          mask: true
        })
        this.toast.show()
      },
      showToastType () {
        this.toast = this.$createToast({
          txt: 'Correct',
          type: 'correct'
        })
        this.toast.show()
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
