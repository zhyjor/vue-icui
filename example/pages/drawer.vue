<template>
  <v-icui-drawer
    ref="drawerLayout"
    @slide-start="handleSlideStart"
    @slide-move="handleSlideMove"
    @slide-end="handleSlideEnd"
    @mask-click="handleMaskClick">
    <div class="drawer" slot="drawer">
      <div class="text">This is drawer</div>
      <div class="text">This is drawer</div>
      <div class="text">This is drawer</div>
      <div class="text">This is drawer</div>
      <div class="text">This is drawer</div>
    </div>
    <div class="content" slot="content">
      <div class="content-text">This is content.</div>
    </div>
  </v-icui-drawer>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      handleSlideStart () {
        console.info('slide-start')
      },
      handleSlideMove (position) {
        console.info('slide-move', position)
      },
      handleSlideEnd (visible) {
        console.info('slide-end', visible)
      },
      handleMaskClick () {
        console.info('mask-click')
        this.$refs.drawerLayout.toggle(false)
      }
    }
  }
</script>

<style scoped lang="css">
  .drawer {
    background-color: white;
    height: 100%;
  }
  .text{
    line-height: 30px;
    font-size: 20px;
    text-align: left;
    padding-left: 15px;
    border-bottom: solid 1px gray;
  }
</style>
