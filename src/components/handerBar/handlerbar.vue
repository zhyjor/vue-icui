<template>
  <div>
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
      <div class="inner-wrapper">
        <div class="handler-wrapper">
          <div class="handler-block">
            <svg viewBox="0 0 24 24">
              <g>
                <path
                  d="M23.77 15.67a.749.749 0 0 0-1.06 0l-2.22 2.22V7.65a3.755 3.755 0 0 0-3.75-3.75h-5.85a.75.75 0 0 0 0 1.5h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22a.749.749 0 1 0-1.06 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5a.747.747 0 0 0 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22a.752.752 0 0 0 1.062 0 .749.749 0 0 0 0-1.06l-3.5-3.5a.747.747 0 0 0-1.06 0l-3.5 3.5a.749.749 0 1 0 1.06 1.06l2.22-2.22V16.7a3.755 3.755 0 0 0 3.75 3.75h5.85a.75.75 0 0 0 0-1.5z"></path>
              </g>
            </svg>
            <div class="num">
              <span>2</span>
            </div>
          </div>
        </div>
      </div>
      <div
        :class="[liked?'liked':'','inner-wrapper']"
        @click="likeClick">
        <div class="handler-wrapper">
          <div class="handler-block">
            <svg v-if="liked" viewBox="0 0 24 24">
              <g>
                <path
                  d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"></path>
              </g>
            </svg>
            <svg v-else="" viewBox="0 0 24 24">
              <g>
                <path
                  d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
              </g>
            </svg>
            <div class="num">
              <transition name='num-like-up'>
                <span v-if="!liked">2</span>
              </transition>
              <transition name='num-like-down'>
                <span v-if="liked">3</span>
              </transition>
            </div>
          </div>
        </div>
      </div>
      <div class="inner-wrapper">
        <div class="handler-wrapper">
          <div class="handler-block">

            <svg viewBox="0 0 24 24">
              <g>
                <path
                  d="M17.53 7.47l-5-5a.749.749 0 0 0-1.06 0l-5 5a.749.749 0 1 0 1.06 1.06l3.72-3.72V15a.75.75 0 0 0 1.5 0V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22a.749.749 0 0 0 0-1.06z"></path>
                <path
                  d="M19.708 21.944H4.292A2.294 2.294 0 0 1 2 19.652V14a.75.75 0 0 1 1.5 0v5.652c0 .437.355.792.792.792h15.416a.793.793 0 0 0 .792-.792V14a.75.75 0 0 1 1.5 0v5.652a2.294 2.294 0 0 1-2.292 2.292z"></path>
              </g>
            </svg>
            <!--<div class="num">-->
            <!--<span>122</span>-->
            <!--</div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'v-icui-handlerbar'
  export default {
    name: COMPONENT_NAME,
    data () {
      let liked = false
      return {
        liked: liked
      }
    },
    methods: {
      likeClick () {
        this.liked = !this.liked
      }
    }
  }

</script>

<style scoped lang="scss">
  .wrapper {
    padding: 0 0.656rem;
    margin: 0 auto;
    z-index: 0;
    position: relative;
    display: flex;
    color: rgb(255, 255, 255);
    /*box-sizing: border-box;*/
    /*background-color: #00a0ff;*/
    .liked {
      color: #e0245e;
    }
    .inner-wrapper {
      display: flex;
      align-items: center;
      height: 3.28rem;
      box-pack: justify;
      justify-content: space-around;
      box-direction: normal;
      box-orient: horizontal;
      flex-direction: row;
      flex: 1;
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
          box-align: center;
          align-items: center;
          display: flex;
          svg {
            fill: currentcolor;
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
              font-size: 16px;
              margin-left: 0.25rem;
              white-space: inherit;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
              display: inline;
            }
            .num-like-up-enter-active, .num-like-up-leave-active {
              transition: all 0.2s
            }
            .num-like-up-enter, .num-like-up-leave-active {
              opacity: 0;
            }
            .num-like-up-enter {
              transform: translateY(-16px);
            }
            .num-like-up-leave-active {
              transform: translateY(-16px);
            }

            .num-like-down-enter-active, .num-like-down-leave-active {
              transition: all 0.2s
            }
            .num-like-down-enter, .num-like-down-leave-active {
              opacity: 0;
            }
            .num-like-down-enter {
              transform: translateY(16px);
            }
            .num-like-down-leave-active {
              transform: translateY(16px);
            }
          }

        }
      }

    }

  }

</style>
