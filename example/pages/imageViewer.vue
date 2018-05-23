<template>
  <div class="wrapper">
    <div class="top-close">
      <div class="close-wrapper">
        <div class="svg-wrapper">
          <svg viewBox="0 0 24 24">
            <g>
              <path
                d="M13.414 12l5.793-5.793a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 0 0 1.414 1.414L12 13.414l5.793 5.793a.996.996 0 0 0 1.414 0 1 1 0 0 0 0-1.414L13.414 12z"></path>
            </g>
          </svg>
        </div>
      </div>

    </div>
    <div class="container">
      <slide-view></slide-view>
    </div>
    <div class="bottom-handler">
      <handler></handler>
    </div>

  </div>

</template>

<script type="text/ecmascript-6">
  import handler from './handlerbar.vue'
  import slideView from './slide.vue'

  export default {
    name: 'imageViewer',
    data () {
      return {}
    },
    components: {
      handler,
      slideView
    }
  }

</script>

<style scoped lang="scss">
  .wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #082e54;
    .top-close {
      z-index: 2;
      position: relative;
      box-direction: normal;
      box-orient: vertical;
      flex-direction: column;
      display: flex;
      box-sizing: border-box;
      /*background-color: #00a0ff;*/
      .close-wrapper {
        height: 3.5rem;
        padding: 0 0.98rem;
        box-pack: center;
        justify-content: center;
        box-direction: normal;
        box-orient: horizontal;
        flex-direction: row;
        .svg-wrapper {
          width: 1.75rem;
          height: 100%;
          padding-right: 1.75rem;
          flex-grow: 1 !important;
          fill: currentcolor;
          display: flex;
          box-direction: normal;
          box-orient: vertical;
          flex-direction: column;
          svg {
            position: relative;
            flex-grow: 1 !important;
            color: rgb(255, 255, 255);
            height: 1.75rem;
            vertical-align: text-bottom;
            position: relative;
          }
        }

      }
    }
    .container {
      flex: 1;
      position: relative;
      /*height: 100%;*/
      overflow: hidden;
    }
    .bottom-handler {

    }
  }

</style>
