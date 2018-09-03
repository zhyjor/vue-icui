<template>
  <!--<optional-demo class="scroll-view">-->
  <div class="scroll-list-wrap">
    <v-icui-scroll
      ref="scroll"
      :data="items"
      :scrollbar="scrollbarObj"
      :pull-down-refresh="pullDownRefreshObj"
      :pull-up-load="pullUpLoadObj"
      :start-y="parseInt(startY)"
      @pullingDown="onPullingDown"
      @pullingUp="onPullingUp"
      @click="clickItem">
      <ul class="list-content">
        <li :key="item.id" @click="clickItem($event,item)" class="list-item" v-for="item in data1">
          <div style="padding: 20px 10px;text-align: center">{{new Date()}}</div>
        </li>
      </ul>
    </v-icui-scroll>
  </div>
  <!--</optional-demo>-->
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'
import { ease } from '../assets/js/ease'

export default {
  data() {
    return {
      data1: [{ key: 1, value: 'woshidige' }, { key: 2, value: 'woshidige' }, { key: 3, value: 'woshidige' }],
      scrollbar: true,
      scrollbarFade: true,
      pullDownRefresh: true,
      pullDownRefreshThreshold: 90,
      pullDownRefreshStop: 40,
      pullUpLoad: true,
      pullUpLoadThreshold: 0,
      pullUpLoadMoreTxt: this.$i18n.t('scrollComponent.defaultLoadTxtMore'),
      pullUpLoadNoMoreTxt: this.$i18n.t('scrollComponent.defaultLoadTxtNoMore'),
      startY: 0,
      scrollToX: 0,
      scrollToY: -200,
      scrollToTime: 700,
      scrollToEasing: 'bounce',
      scrollToEasingOptions: ['bounce', 'swipe', 'swipeBounce'],
      items: [],
      itemIndex: 0
    }
  },
  created() {
    for (let i = 0; i < 2; i++) {
      this.items.push(this.$i18n.t('normalScrollListPage.previousTxt') + ++this.itemIndex + this.$i18n.t('normalScrollListPage.followingTxt'))
    }
  },
  watch: {
    scrollbarObj: {
      handler() {
        this.rebuildScroll()
      },
      deep: true
    },
    pullDownRefreshObj: {
      handler() {
        this.rebuildScroll()
      },
      deep: true
    },
    pullUpLoadObj: {
      handler() {
        this.rebuildScroll()
      },
      deep: true
    },
    startY() {
      this.rebuildScroll()
    }
  },
  computed: {
    scrollbarObj: function() {
      return this.scrollbar ? { fade: this.scrollbarFade } : false
    },
    pullDownRefreshObj: function() {
      return this.pullDownRefresh ? {
        threshold: parseInt(this.pullDownRefreshThreshold),
        stop: parseInt(this.pullDownRefreshStop)
      } : false
    },
    pullUpLoadObj: function() {
      return this.pullUpLoad ? {
        threshold: parseInt(this.pullUpLoadThreshold),
        txt: { more: this.pullUpLoadMoreTxt, noMore: this.pullUpLoadNoMoreTxt }
      } : false
    }
  },
  methods: {
    scrollTo() {
      this.$refs.scroll.scrollTo(this.scrollToX, this.scrollToY, this.scrollToTime, ease[this.scrollToEasing])
    },
    onPullingDown() {
      // 模拟更新数据
      console.log('pulling down and load data')
      setTimeout(() => {
        if (this._isDestroyed) {
          return
        }
        if (Math.random() > 0.5) {
          // 如果有新数据
          this.items.unshift(this.$i18n.t('normalScrollListPage.newDataTxt') + +new Date())
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate()
        }
      }, 2000)
    },
    onPullingUp() {
      // 更新数据
      console.log('pulling up and load data')
      setTimeout(() => {
        if (this._isDestroyed) {
          return
        }
        if (Math.random() > 0.5) {
          // 如果有新数据
          let newPage = []
          for (let i = 0; i < 10; i++) {
            newPage.push(this.$i18n.t('normalScrollListPage.previousTxt') + ++this.itemIndex + this.$i18n.t('normalScrollListPage.followingTxt'))
          }

          this.items = this.items.concat(newPage)
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate()
        }
      }, 1500)
    },
    clickItem() {
      this.$router.back()
    },
    updateScrollbar(val) {
      this.scrollbar = val
    },
    updateScrollbarFade(val) {
      this.scrollbarFade = val
    },
    updatePullDownRefresh(val) {
      this.pullDownRefresh = val
    },
    updatePullDownRefreshThreshold(val) {
      this.pullDownRefreshThreshold = val
    },
    updatePullDownRefreshStop(val) {
      this.pullDownRefreshStop = val
    },
    updatePullUpLoad(val) {
      this.pullUpLoad = val
    },
    updatePullUpLoadThreshold(val) {
      this.pullUpLoadThreshold = val
    },
    updatePullUpLoadMoreTxt(val) {
      this.pullUpLoadMoreTxt = val
    },
    updatePullUpLoadNoMoreTxt(val) {
      this.pullUpLoadNoMoreTxt = val
    },
    updateStartY(val) {
      this.startY = val
    },
    updateScrollToX(val) {
      this.scrollToX = val
    },
    updateScrollToY(val) {
      this.scrollToY = val
    },
    updateScrollToTime(val) {
      this.scrollToTime = val
    },
    updateScrollToEasing(val) {
      this.scrollToEasing = val
    },
    rebuildScroll() {
      Vue.nextTick(() => {
        this.$refs.scroll.destroy()
        this.$refs.scroll.initScroll()
      })
    }
  },
  components: {
    vIcuiAllPanel
  }
}
</script>

<style scoped lang="scss">
  .scroll-list-wrap {
    position: relative;
    height: 90vh;
    border: 1px solid rgba(0, 0, 0, .1);
    /*<!--border-radius: $radius-size-medium;-->*/
    transform: rotate(0deg); // fix 子元素超出边框圆角部分不隐藏的问题
    overflow: hidden;
  }

  .list-content {
    position: relative;
    z-index: 10;
    /*background: #fff;*/
    .list-item {
      border-bottom: 1px solid #e5e5e5;
    }
  }
</style>
