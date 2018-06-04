<template>
  <a class="icui-ava-wrapper-a">
    <div class="icui-ava-radius">
      <div class="icui-ava-img-outer">
        <div class="icui-ava-img-placeholder">
        </div>
        <div class="icui-ava-img-inner">
          <div class="icui-ava-img-inner-sec">
            <div class="icui-ava-img-bg">
            </div>
            <div class="icui-ava-img-warpper">
              <img src="../../assets/images/avatar.jpg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script type="text/ecmascript-6">

</script>

<style scoped lang="scss">

  .icui-ava-wrapper-a {
    flex-grow: 0 !important;
    display: block;
    flex-shrink: 1 !important;
    width: 100%;
    .icui-ava-radius {
      border-bottom-left-radius: 9999px;
      border-bottom-right-radius: 9999px;
      border-top-right-radius: 9999px;
      border-top-left-radius: 9999px;
      overflow: hidden;
      width: 100%;
      z-index: 0;
      position: relative;
      flex-direction: column;
      flex-basis: auto !important;
      flex-shrink: 0 !important;
      display: flex;
      align-items: stretch;
      .icui-ava-img-outer {
        display: block;
        overflow: hidden;
        z-index: 0;
        position: relative;
        flex-direction: column;
        align-items: stretch;
        .icui-ava-img-placeholder {
          padding-bottom: 100%;
          display: block;
          width: 100%;
        }
        .icui-ava-img-inner {
          position: absolute;
          bottom: 0;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 100%;
          display: block;
          .icui-ava-img-inner-sec {
            position: absolute;
            bottom: 0;
            top: 0;
            left: 0;
            right: 0;
            border-bottom-left-radius: 9999px;
            border-bottom-right-radius: 9999px;
            border-top-right-radius: 9999px;
            border-top-left-radius: 9999px;
            z-index: 0;
            flex-direction: column;
            flex-basis: auto !important;
            flex-shrink: 0 !important;
            display: flex;
            align-items: stretch;
            .icui-ava-img-bg {
              opacity: 0;
              background-color: rgb(230, 236, 240);
              z-index: 1;
              transition-property: opacity;
              transition-duration: 100ms;
              border-bottom-left-radius: inherit;
              border-top-right-radius: inherit;
              border-bottom-right-radius: inherit;
              border-top-left-radius: inherit;
              position: absolute;
              bottom: 0px;
              top: 0px;
              right: 0px;
              left: 0px;
              flex-direction: column;
              flex-basis: auto !important;
              flex-shrink: 0 !important;
              display: flex;
              align-items: stretch;

            }
            .icui-ava-img-warpper {
              background-image: url(../../assets/images/avatar.jpg);
              background-position: center center;
              background-repeat: no-repeat;
              background-size: cover;
              background-color: transparent;
              position: absolute;
              bottom: 0px;
              top: 0px;
              right: 0px;
              left: 0px;
              z-index: 0;
              flex-direction: column;
              flex-basis: auto !important;
              flex-shrink: 0 !important;
              display: flex;
              align-items: stretch;
              img {
                opacity: 0;
                position: absolute;
                bottom: 0px;
                z-index: -1;
                top: 0px;
                right: 0px;
                left: 0px;
                width: 100%;
                height: 100%;

              }
            }
          }
        }
      }

    }

  }

</style>
