<template>
  <div class="ct-block-wrapper">
    <div class="ct-wrapper">
      <div class="ct-block">
        <a class="ct-account-name-a">
          <div class="ct-account-name">
            <div class="ct-account-content">
              <div class="ct-account-left">
              <span>
                <span>New Scientist</span>
              </span>
              </div>
              <div class="ct-account-right">
                <svg viewBox="0 0 24 24" aria-label="认证账号">
                  <g>
                    <path
                      d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25a3.606 3.606 0 0 0-1.336-.25c-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5a.749.749 0 0 1-1.041.208l-.115-.094-2.415-2.415a.749.749 0 1 1 1.06-1.06l1.77 1.767 3.825-5.74a.75.75 0 0 1 1.25.833z"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div class="ct-accoutn-nick">
              <div class="ct-accoutn-nick-text">
                @newscientist
              </div>
            </div>

          </div>
        </a>
        <span class="ct-dot-span">·</span>
        <a class="ct-time">
          <div class="ct-time-content">
            4分钟
          </div>
        </a>
      </div>
      <div class="ct-down-arrow">
        <div class="ct-down-content">
          <span></span>
          <div class="ct-down-content-wrapper">
            <svg viewBox="0 0 24 24">
              <g>
                <path
                  d="M20.207 7.043a1 1 0 0 0-1.414 0L12 13.836 5.207 7.043a1 1 0 0 0-1.414 1.414l7.5 7.5a.996.996 0 0 0 1.414 0l7.5-7.5a1 1 0 0 0 0-1.414z"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>

    </div>
    <div class="ct-content-text">
      <span>
        Catching malaria makes you smell more attractive to mosquitoes
      </span>

    </div>
    <div class="ct-radis-block">
      <div class="ct-radis-block-content">
        <div class="ct-radis-line">
wewew w
        </div>

      </div>
    </div>
  </div>


</template>

<script type="text/ecmascript-6">
  export default {
    name: 'content-text',
  }
</script>

<style scoped lang="scss">
  .ct-block-wrapper {
    margin-top: -.15rem;
    z-index: 0;
    position: relative;
    flex-direction: column;
    display: flex;
    box-sizing: border-box;
    align-items: stretch;
    .ct-wrapper {
      margin-bottom: 0.164rem;
      box-pack: justify;
      justify-content: space-between;
      flex-direction: row;
      position: relative;
      display: flex;
      .ct-block {
        align-items: baseline;
        flex-direction: row;
        position: relative;
        display: flex;
        box-sizing: border-box;
        .ct-account-name-a {
          text-decoration: none !important;
          min-width: 0px;
          display: flex;
          flex-direction: row;
          .ct-account-name {
            max-width: 100%;
            flex-direction: row;
            display: flex;
            align-items: stretch;
            .ct-account-content {
              max-width: 100%;
              flex-direction: row;
              position: relative;
              display: flex;
              .ct-account-left {
                font-size: 1rem;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-weight: bold;
                color: rgb(20, 23, 26);
                line-height: 1.3125rem;
                word-wrap: break-word;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
                display: inline;
                overflow: hidden;

              }
              .ct-account-right {
                flex-direction: row;
                position: relative;
                display: flex;
                box-sizing: border-box;
                svg {
                  color: rgb(29, 161, 242);
                  margin-left: 0.164rem;
                  vertical-align: text-bottom;
                  height: 1.25em;
                  fill: currentcolor;
                  display: inline-block;
                  position: relative;

                }
              }
            }
            .ct-accoutn-nick {
              margin-left: 0.328rem;
              flex-direction: row;
              align-items: center;
              position: relative;
              display: flex;
              .ct-accoutn-nick-text {
                color: rgb(101, 119, 134);
                font-weight: 400;
                font-size: 1rem;
                white-space: nowrap;
                text-overflow: ellipsis;
                line-height: 1.313rem;
                word-wrap: break-word;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
                display: inline;
                overflow: hidden;
                flex-direction: row;

              }
            }

          }

        }
        .ct-dot-span {
          color: #657786;
          padding: 0 .328rem;
          flex-shrink: 0 !important;
        }
        .ct-time {
          text-decoration: none;
          vertical-align: text-top;
          white-space: nowrap;
          color: #657786;
          .ct-time-content {
            color: rgb(101, 119, 134);
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.313rem;
            word-wrap: break-word;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
            display: inline;

          }
        }
      }
      .ct-down-arrow {
        margin-left: 1.313rem;
        justify-content: center;
        position: relative;
        flex-direction: column;
        display: flex;
        align-items: stretch;
        box-align: stretch;
        .ct-down-content {
          flex-direction: column;
          display: flex;
          align-items: stretch;
          span {
            bottom: -5px;
            left: -9px;
            right: -9px;
            top: -5px;
            position: absolute;
            z-index: -1;
          }
          .ct-down-content-wrapper {
            transition-property: color;
            color: rgb(101, 119, 134);
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.3125;
            word-wrap: break-word;
            white-space: pre-wrap;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
            display: inline;
            svg {
              vertical-align: text-bottom;
              max-width: 100%;
              height: 1.25em;
              fill: currentcolor;
              display: inline-block;
              position: relative;
            }
          }
        }
      }
    }
    .ct-content-text {
      font-weight: 400;
      font-size: 1rem;
      color: rgb(20, 23, 26);
      line-height: 1.3125rem;
      word-wrap: break-word;
      text-decoration: none;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
      display: inline;
      position: relative;
      box-sizing: border-box;

    }
    .ct-radis-block {
      margin-top: .65625rem;
      position: relative;
      display: flex;
      .ct-radis-block-content{
        position: relative;
        overflow: hidden;
        z-index: 0;
        flex-direction: column;
        display: flex;
        .ct-radis-line{
          padding-bottom: 56.25%;
          width: 100%;
          display: block;
          background-color: red;
          border-radius: 1rem;
          overflow: hidden;
          z-index: 0;
          position: relative;
          flex-direction: column;
          display: flex;
        }
      }

    }
  }


</style>
