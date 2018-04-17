<template>
  <div class="wrapper">
    <div ref="slideWrapper" class="slide-container">
      <v-icui-slide
        ref="slide"
        :data="items"
        :initial-index="initialIndex"
        :loop="loop"
        :auto-play="autoPlay"
        :interval="interval"
        :threshold="threshold"
        :speed="speed"
        :allow-vertical="allowVertical"
        @change="changePage"
        @click="clickPage">
        <template v-if="dotsSlot" slot="dots" slot-scope="props">
            <span class="my-dot" :class="{active: props.current === index}"
                  v-for="(item, index) in props.dots">{{index + 1}}</span>
        </template>
      </v-icui-slide>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const item3 = {
    url: 'http://www.didichuxing.com/',
    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
  }
  export default {
    data () {
      return {
        items: [
          {
            url: 'http://www.didichuxing.com/',
            image: require('../assets/demo/1.jpg')
          },
          {
            url: 'http://www.didichuxing.com/',
            image: require('../assets/demo/2.jpg')
          },
          {
            url: 'http://www.didichuxing.com/',
            image: require('../assets/demo/3.jpg')
          },{
            url: 'http://www.didichuxing.com/',
            image: require('../assets/demo/4.jpg')
          },
          {
            url: 'http://www.didichuxing.com/',
            image: require('../assets/demo/5.jpg')
          },
          {
            url: 'http://www.didichuxing.com/',
            image: require('../assets/demo/6.jpg')
          },
          {
            url: 'http://www.didichuxing.com/',
            image: require('../assets/demo/7.jpg')
          },
          {
            url: 'http://www.didichuxing.com/',
            image: require('../assets/demo/8.png')
          }, {
            url: 'http://www.didichuxing.com/',
            image: require('../assets/demo/9.jpg')
          }
        ],
        loop: false,
        autoPlay: false,
        interval: 4000,
        threshold: 0.3,
        speed: 400,
        allowVertical: false,
        initialIndex: 1,
        dotsSlot: false,
        addItem3: false
      }
    },
    watch: {
      addItem3 (newV) {
        if (newV) {
          this.items.push(item3)
        } else {
          this.items.pop()
        }
      }
    },
    methods: {
      changePage (current) {
        console.log('当前轮播图序号为:' + current)
      },
      clickPage (item, index) {
        console.log(item, index)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .wrapper {
    width: 100%;
    /*background: #efeff4;*/
    position: relative;
    .slide-container {
      height: 100%;
      /*width: 100%;*/
      /*margin-bottom: 15px;*/
      transform: translateZ(0px);
      border-radius: 2px;
      overflow: hidden;
      box-shadow: 0 2px 9px #ddd;
      .cube-slide-dots {
        .my-dot {
          height: auto;
          font-size: 12px;
          background: none;
          &.active {
            color: #fc9153;
          }
        }
      }
    }
  }
</style>
