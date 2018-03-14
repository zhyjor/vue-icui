<template>
  <div class="page">
    <div class="flex-box">
      <div ref="wrapper" class="page-content">
        <main class="main-content">
          <div class="demo">
            <slot name="demo"/>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'scroll-demo'
  }
</script>

<style scoped lang="scss">

  @import "../assets/style/var.scss";

  .page {
    position: fixed;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: $color-white;
    .flex-box {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      .page-content {
        flex: 1 0 95%;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        .main-content {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          .demo {
            @media screen and (min-width: 42rem) {
              flex: 0 0 23rem;
            }

            @media screen and (max-width: 42rem) {
              flex: 0 0 100%;
              margin-bottom: 1rem;
            }
            .scroll-list-wrap {
              position: relative;
              height: 100vh;
              border: 1px solid rgba(0, 0, 0, .1);
              border-radius: $radius-size-medium;
              transform: rotate(0deg); // fix 子元素超出边框圆角部分不隐藏的问题
              overflow: hidden;
            }
          }
        }
      }
    }
  }
</style>
