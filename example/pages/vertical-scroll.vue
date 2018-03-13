<template>
  <optional-demo class="scroll-view" :title="$t('examples.normalScrollList')" :desc="$t('normalScrollListPage.desc')">
    <div class="scroll-list-wrap" slot="demo">
      <scroll
        ref="scroll"
        :data="items"
        :scrollbar="scrollbarObj"
        :pull-down-refresh="pullDownRefreshObj"
        :pull-up-load="pullUpLoadObj"
        :start-y="parseInt(startY)"
        @pullingDown="onPullingDown"
        @pullingUp="onPullingUp"
        @click="clickItem"/>
    </div>
  </optional-demo>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import Scroll from './scroll.vue'

  import {ease} from '../assets/js/ease'

  export default {
    data () {
      return {
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
    created () {
      for (let i = 0; i < 2; i++) {
        this.items.push(this.$i18n.t('normalScrollListPage.previousTxt') + ++this.itemIndex + this.$i18n.t('normalScrollListPage.followingTxt'))
      }
    },
    components: {
      Scroll
    },
    watch: {
      scrollbarObj: {
        handler () {
          this.rebuildScroll()
        },
        deep: true
      },
      pullDownRefreshObj: {
        handler () {
          this.rebuildScroll()
        },
        deep: true
      },
      pullUpLoadObj: {
        handler () {
          this.rebuildScroll()
        },
        deep: true
      },
      startY () {
        this.rebuildScroll()
      }
    },
    computed: {
      scrollbarObj: function () {
        return this.scrollbar ? {fade: this.scrollbarFade} : false
      },
      pullDownRefreshObj: function () {
        return this.pullDownRefresh ? {
          threshold: parseInt(this.pullDownRefreshThreshold),
          stop: parseInt(this.pullDownRefreshStop)
        } : false
      },
      pullUpLoadObj: function () {
        return this.pullUpLoad ? {
          threshold: parseInt(this.pullUpLoadThreshold),
          txt: {more: this.pullUpLoadMoreTxt, noMore: this.pullUpLoadNoMoreTxt}
        } : false
      }
    },
    methods: {
      scrollTo () {
        this.$refs.scroll.scrollTo(this.scrollToX, this.scrollToY, this.scrollToTime, ease[this.scrollToEasing])
      },
      onPullingDown () {
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
      onPullingUp () {
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
      clickItem () {
        this.$router.back()
      },
      updateScrollbar (val) {
        this.scrollbar = val
      },
      updateScrollbarFade (val) {
        this.scrollbarFade = val
      },
      updatePullDownRefresh (val) {
        this.pullDownRefresh = val
      },
      updatePullDownRefreshThreshold (val) {
        this.pullDownRefreshThreshold = val
      },
      updatePullDownRefreshStop (val) {
        this.pullDownRefreshStop = val
      },
      updatePullUpLoad (val) {
        this.pullUpLoad = val
      },
      updatePullUpLoadThreshold (val) {
        this.pullUpLoadThreshold = val
      },
      updatePullUpLoadMoreTxt (val) {
        this.pullUpLoadMoreTxt = val
      },
      updatePullUpLoadNoMoreTxt (val) {
        this.pullUpLoadNoMoreTxt = val
      },
      updateStartY (val) {
        this.startY = val
      },
      updateScrollToX (val) {
        this.scrollToX = val
      },
      updateScrollToY (val) {
        this.scrollToY = val
      },
      updateScrollToTime (val) {
        this.scrollToTime = val
      },
      updateScrollToEasing (val) {
        this.scrollToEasing = val
      },
      rebuildScroll () {
        Vue.nextTick(() => {
          this.$refs.scroll.destroy()
          this.$refs.scroll.initScroll()
        })
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
