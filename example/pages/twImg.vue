<template>
  <div class="ti-wrapper">
    <div class="ti-cloumn-imgs">
      <a class="ti-cloumn-a">
        <div class="ti-img-warpper-outer">
          <div class="ti-img-warpper-inner">
            <div class="ti-img-placeholder">
              <div class="ti-img-out-div">
                <img src="https://pbs.twimg.com/media/Da3u_7lVAAA8guZ?format=jpg&name=360x360"/>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>

  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    name: 'v-icui-imgList'
  }

</script>

<style scoped lang="scss">
  .ti-wrapper {
    flex-direction: row;
    width: 100%;
    height: 100%;
    z-index: 0;
    position: relative;
    display: flex;
    align-items: stretch;
    flex-shrink: 0 !important;
    .ti-cloumn-imgs {
      margin-right: 2px;
      flex-basis: 0px !important;
      flex-grow: 1 !important;
      position: relative;
      flex-direction: column;
      flex-shrink: 0 !important;
      display: flex;
      .ti-cloumn-a {
        margin-bottom: 2px;
        flex-basis: 0px !important;
        flex-grow: 1 !important;
        position: relative;
        .ti-img-warpper-outer {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 0;
          overflow: hidden;
          flex-direction: column;
          flex-basis: auto !important;
          flex-shrink: 0 !important;
          display: flex;
          align-items: stretch;
          .ti-img-warpper-inner {
            margin-bottom: -61%;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 0;
            flex-direction: column;
            flex-basis: auto !important;
            flex-shrink: 0 !important;
            display: flex;
            align-items: stretch;
            .ti-img-placeholder {
              background-color: rgb(32, 34, 38);
              opacity: 0;
              z-index: 1;
              transition-property: opacity;
              transition-duration: 100ms;
              position: absolute;
              bottom: 0;
              top: 0;
              left: 0;
              right: 0;
              flex-direction: column;
              flex-basis: auto !important;
              flex-shrink: 0 !important;
              display: flex;
              align-items: stretch;
            }
            .ti-img-out-div {
              background-color: transparent;
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              z-index: 0;
              margin: 0;
              flex-direction: column;
              flex-basis: auto !important;
              flex-shrink: 0 !important;
              display: flex;
              align-items: stretch;
              background-position: center center;
              background-repeat: no-repeat;
              background-size: cover;
              background-image: url(https://pbs.twimg.com/media/Da3u_7lVAAA8guZ?format=jpg&name=360x360);

              img {
                opacity: 0;
                position: absolute;
                bottom: 0;
                top: 0;
                left: 0;
                right: 0;
                width:100%;
                height: 100%;

              }
            }
          }
        }
      }

    }
  }
</style>
