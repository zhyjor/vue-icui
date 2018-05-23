<template>
  <div class="v-icui-panel-wrapper">
    <div class="v-icui-panel-wrapper-outer">
      <div class="v-icui-panel-wrapper-inner">
        <div class="v-icui-panel-content">
          <div class="v-icui-panel-ava-wrapper">
            <avatar></avatar>
          </div>
          <div class="v-icui-panel-right-wrapper">
            <v-icui-panel></v-icui-panel>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script type="text/ecmascript-6">
  import avatar from '../components/avatar.vue'

  export default {
    name: 'content',
    data () {
      return {}
    },
    components: {
      avatar
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
      flex-basis: auto !important;
      flex-shrink: 0 !important;
      display: flex;
      align-items: stretch;
      .v-icui-panel-wrapper-inner {
        padding: 1rem 0.65625rem;
        z-index: 0;
        position: relative;
        flex-direction: column;
        flex-basis: auto !important;
        flex-shrink: 0 !important;
        display: flex;
        align-items: stretch;
        .v-icui-panel-content {
          margin-left: calc(-0.328125rem);
          margin-right: calc(-0.328125rem);
          overflow: hidden;
          flex-direction: row;
          z-index: 0;
          position: relative;
          flex-basis: auto !important;
          flex-shrink: 0 !important;
          display: flex;
          align-items: stretch;
          .v-icui-panel-ava-wrapper {
            margin-left: calc(0.328125rem);
            margin-right: calc(0.328125rem);
            max-width: 3.28125rem;
            z-index: 0;
            position: relative;
            flex-direction: column;
            flex: 1;
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
            flex: 1;
          }
        }
      }

    }
  }

</style>
