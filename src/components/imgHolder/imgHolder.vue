<template>
  <div class="ti-wrapper">
    <div class="ti-wrapper-sec" v-for="(value, id) in arrId">
      <div class="ti-cloumn-imgs" v-for="(item, index) in value">
        <a class="ti-cloumn-a">
          <div class="ti-img-warpper-outer">
            <div class="ti-img-warpper-inner">
              <div class="ti-img-placeholder">
                <div class="ti-img-out-div">
                  <img :src=item.url />
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'v-icui-imgHolder'
  export default {
    name: COMPONENT_NAME,
    data () {
      return {
        arrId: [[
//          {
//            url: require('../assets/demo/1.jpg')
//          },
//          {
//            url: require('../assets/demo/2.jpg')
//          },
          {
            url: require('../../assets/demo/3.jpg')
          }
        ],
          [
//            {
//              url: require('../assets/demo/1.jpg')
//            },
            {
              url: require('../../assets/demo/2.jpg')
            },
            {
              url: require('../../assets/demo/3.jpg')
            },
          ],
//          [
////            {
////              url: require('../assets/demo/1.jpg')
////            },
////            {
////              url: require('../assets/demo/2.jpg')
////            },
////            {
////              url: require('../assets/demo/3.jpg')
////            },
//          ]
        ],
      }
    }
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
    .ti-wrapper-sec {
      flex-direction: column;
      z-index: 0;
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      flex: 1;
      align-items: stretch;
      /*flex-shrink: 0 !important;*/
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
                /*opacity: 0;*/
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
                /*background-image: url(../assets/demo/1.jpg);*/

                img {
                  /*opacity: 0;*/
                  position: absolute;
                  bottom: 0;
                  top: 0;
                  left: 0;
                  right: 0;
                  width: 100%;
                  /*height: 100%;*/

                }
              }
            }
          }
        }

      }
    }
  }

</style>
