<template>
  <div class="wrapper">
    <div class="inner-wrapper">
      <div class="handler-wrapper">
        <div class="handler-block">
          <svg viewBox="0 0 24 24">
            <g>
              <path
                d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828a.85.85 0 0 0 .12.403.744.744 0 0 0 1.034.229c.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67a.75.75 0 0 0-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
            </g>
          </svg>
          <div class="num">
            <span>2</span>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script type="text/ecmascript-6">

</script>

<style scoped lang="scss">
  .wrapper {
    padding: 0 0.656rem;
    width: 100%;
    margin: 0 auto;
    z-index: 0;
    position: relative;
    display: flex;
    .inner-wrapper {
      height: 3.28rem;
      box-pack: justify;
      justify-content: space-around;
      box-direction: normal;
      box-orient: horizontal;
      flex-direction: row;
      .handler-wrapper {
        padding: 0 0.85rem;
        min-height: 1.875rem;
        overflow: visible;
        flex-grow: 1 !important;
        box-pack: center;
        justify-content: center;
        box-align: center;
        align-items: center;
        z-index: 0;
        position: relative;
        display: flex;
        box-direction: normal;
        box-orient: vertical;
        flex-direction: column;
        .handler-block {
          white-space: nowrap;
          box-pack: start;
          justify-content: flex-start;
          font-weight: 400;
          font-size: 1rem;
          line-height: 1.3125;
          word-wrap: break-word;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
          color: rgb(255, 255, 255);
          box-align: center;
          align-items: center;
          display: flex;
          svg {
            font-size: 1.5rem;
            vertical-align: text-bottom;
            height: 1.25em;
            display: inline-block;
            position: relative;
          }
          .num {
            display: inline-flex;
            overflow: hidden;
            z-index: auto;
            position: relative;
            box-direction: normal;
            box-orient: vertical;
            flex-direction: column;
            align-items: stretch;
            box-align: stretch;
            span {
              margin-left: 0.25rem;
              white-space: inherit;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
              display: inline;

            }
          }

        }
      }

    }

  }

</style>
