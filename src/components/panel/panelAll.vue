<template>
  <div class="v-icui-panel-wrapper">
    <div class="v-icui-panel-wrapper-outer">
      <div class="v-icui-panel-wrapper-inner">
        <div class="v-icui-panel-content">
          <div class="v-icui-panel-ava-wrapper">
            <v-icui-avatar></v-icui-avatar>
          </div>
          <div class="v-icui-panel-right-wrapper">
            <v-icui-panl-small></v-icui-panl-small>
            <div class="v-icui-panel-right-handler">
              <v-icui-h-bar></v-icui-h-bar>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script type="text/ecmascript-6">
  import vIcuiAvatar from './avatar.vue'
  import vIcuiPanlSmall from './panel.vue'
  import vIcuiHBar from '../handerBar/handlerbar.vue'

  export default {
    name: 'v-icui-panel',
    data () {
      return {}
    },
    components: {
      vIcuiAvatar,
      vIcuiPanlSmall,
      vIcuiHBar
    }

  }
</script>

<style scoped lang="scss">
  .v-icui-panel-wrapper {
    border-bottom-color: rgb(230, 236, 240);
    border-bottom-width: 1px;
    display: block;
    z-index: 0;
    position: relative;
    flex-direction: column;
    align-items: stretch;
    .v-icui-panel-wrapper-outer {
      transition-property: background-color;
      cursor: pointer;
      transition-duration: 0.2s;
      z-index: 0;
      position: relative;
      flex-direction: column;
      flex: 0 1 auto;
      display: flex;
      align-items: stretch;
      .v-icui-panel-wrapper-inner {
        padding: 1rem 0.65625rem;
        z-index: 0;
        position: relative;
        flex-direction: column;
        flex: 0 1 auto;
        display: flex;
        align-items: stretch;
        .v-icui-panel-content {
          margin-left: calc(-0.328125rem);
          margin-right: calc(-0.328125rem);
          overflow: hidden;
          flex-direction: row;
          z-index: 0;
          position: relative;
          flex: 0 1 auto;
          display: flex;
          align-items: stretch;
          .v-icui-panel-ava-wrapper {
            margin-left: calc(0.328125rem);
            margin-right: calc(0.328125rem);
            max-width: 3.28125rem;
            min-width: 2rem;
            z-index: 0;
            position: relative;
            flex-direction: column;
            flex: 1 0 0;
            display: flex;
            align-items: stretch;
          }
          .v-icui-panel-right-wrapper {
            margin-left: calc(0.328125rem);
            margin-right: calc(0.328125rem);
            z-index: 0;
            position: relative;
            flex-direction: column;
            display: flex;
            align-items: stretch;
            flex: 7 0 0;
            .v-icui-panel-right-handler{
              max-width: 340px;
              margin-top: 0.65625rem;
              height: 1.576rem;
            }
          }
        }
      }

    }
  }

</style>
