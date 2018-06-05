<template>
  <div class="icui-cell-wrapper">
    <div class="icui-cell-inner">
      <div class="icui-cell-ranker">
        2
      </div>
      <div class="icui-cell-content">
        <div class="icui-cell-content-text">
          <span>
            #BumblebeeMovi
          </span>
        </div>
        <div class="icui-cell-content-num">
          <span>6,864 推文</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const COMPONENT_NAME = 'v-icui-column'
  export default {
    name: COMPONENT_NAME,
  }
</script>

<style scoped lang="scss">
  .icui-cell-wrapper {
    /*border-bottom: 1px rgb(230, 236, 240) solid;*/
    display: block;
    z-index: 0;
    position: relative;
    flex-direction: column;
    align-items: stretch;
    .icui-cell-inner {
      padding: 0.684375rem;
      background-color: white;
      /*transition-property: background-color;*/
      cursor: pointer;
      flex-direction: row;
      transition-duration: 0.2s;
      position: relative;
      min-width: 0px;
      display: flex;
      flex: 0 0 auto;
      align-items: stretch;
      .icui-cell-ranker {
        width: 2.625rem;
        font-weight: 400;
        font-size: 1.35rem;
        line-height: 1.1125;
        word-wrap: break-word;
        white-space: normal;
        text-decoration: none;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
        /*display: inline;*/
        color: rgb(101, 119, 134);
        flex: 0 0 auto;
      }
      .icui-cell-content {
        flex: 1 1 auto;
        z-index: 0;
        position: relative;
        min-width: 0px;
        min-height: 0px;
        flex-direction: column;
        align-items: stretch;
        .icui-cell-content-text {
          font-weight: 400;
          font-size: 1.15rem;
          color: rgb(20, 23, 26);
          line-height: 1.1125;
          word-wrap: break-word;
          white-space: normal;
          text-decoration: none;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
          display: inline;
          span {
            white-space: normal;
            font-variant: inherit;
            line-height: 1.1125;
            font-size: inherit;
            word-wrap: break-word;
            text-decoration: none;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
            display: inline;
            color: inherit;

          }

        }
        .icui-cell-content-num {
          font-weight: 400;
          font-size: 1rem;
          line-height: 1.3125;
          word-wrap: break-word;
          white-space: normal;
          text-decoration: none;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
          font: inherit;
          /*display: inline;*/
          color: rgb(101, 119, 134);

        }
      }

    }

  }
</style>
