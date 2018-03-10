<template>
  <icui-scroller
    ref="scrollView"
    class="scroll-view msg-items"
    :options="{click:true, scrollY: true, mouseWheel: true, probeType: 1}"
    :scroller-class="{'scroller': true}"
    @scroll="scrolling"
    @scrollEnd="scrollEnd">
    <div
      v-for="item in msgs"
      :key="item.id">
      <div class="separation-area"/>
      <div class="msg-item">
        item.name
      </div>
    </div>
    <div class="data-load-tips">
      {{ loadStatusConfig[loadStatus] }}
    </div>
  </icui-scroller>
</template>

<script>
  export default {
    updated () {
      this.refresh()
    },
    data () {
      let msgs = []
      msgs.push({id: 1, name: 'top'})
      msgs.push({id: 21, name: 'bbb'})
      msgs.push({id: 22, name: 'bbb'})
      msgs.push({id: 23, name: 'bbb'})
      msgs.push({id: 24, name: 'bbb'})
      msgs.push({id: 25, name: 'bbb'})
      msgs.push({id: 26, name: 'bbb'})
      let totalCount = 40
      let loadStatus = ''
      if (msgs.length < totalCount) {
        loadStatus = 'canLoad'
      } else {
        loadStatus = 'canNotLoad'
      }
      console.log(msgs)
      return {
        msgs: msgs,
        totalCount: totalCount,
        loadStatus: loadStatus,
        loadStatusConfig: {
          canLoad: '上拉加载更多',
          canNotLoad: '没有更多数据~',
          willLoad: '松手开始加载',
          loading: '加载中...'
        }
      }
    },
    methods: {
      refresh () {
        let self = this
        self.$refs.scrollView.refresh()
      },
      scrolling () {
        let self = this
        let iscroll = self.$refs.scrollView.iscroll
        if (self.msgs.length < self.totalCount) {
          if (Math.abs(iscroll.y) - Math.abs(iscroll.maxScrollY) > 10) {
            self.loadStatus = 'willLoad'
          } else {
            self.loadStatus = 'canLoad'
          }
        } else {
          self.loadStatus = 'canNotLoad'
        }
      },
      scrollEnd () {
        let self = this
        if (self.msgs.length < self.totalCount) {
          if (self.loadStatus === 'willLoad') {
            self.loadStatus = 'loading'
            self.getNextPageData()
          } else {
            self.loadStatus = 'canLoad'
          }
        } else {
          self.loadStatus = 'canNotLoad'
        }
      },
      setCollect (item) {
        let ids = []
        let collect = !item.collected
        ids.push(item.id)
        item.collected = collect
        this.$forceUpdate()
      }
    }
  }
</script>
<style lang="scss">
  @import "../assets/style/var.scss";

  .msg-items {
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 200px;
    overflow: hidden;
    background-color: #F7F7F7;
    width: 100%;
    touch-action: none;
    .scroller {
    }
    .msg-item {
      background: #fff;
      padding: 14px 12px 16px 14px;
      border-top: 1px solid #EFEFEF;
      border-bottom: 1px solid #EFEFEF;

      .title {
        color: #333;
        font-size: 16px;
        &:hover {
          color: #0ca0fc;
        }
      }

      .company-name {
        margin-top: 6px;
        color: #999;
        font-size: 14px;
      }

      .bottom-line {
        display: flex;
        justify-content: space-between;
        margin-top: 16px;
        align-items: center;

        .type {
          float: left;
          display: inline-block;
          background: #F0F0F0;
          padding: 6px 9px;
          border-radius: 100px;
          color: $topicColor;
          font-size: 12px;
        }
        .right-part {
          display: flex;
          flex-direction: row-reverse;
          align-items: center;

          .date {
            float: right;
            margin-right: 10px;
            color: #BDBDBD;
            font-size: 12px;
          }

          .collect-icon {
            float: right;
            background-size: 24px auto;
            width: 24px;
            height: 24px;
          }

          .icon-has-collect {
            background-image: url(../assets/images/has_collect.png);
          }

          .icon-not-collect {
            background-image: url(../assets/images/not_collect.png);
          }

        }
      }
    }
    .data-load-tips {
      padding: 15px 0 10px 0;
      text-align: center;
      color: #999;
      font-size: 12px;
    }
    .date-separation-area {
      height: 28px;
      line-height: 28px;
      text-align: center;
      font-size: 12px;
      color: #BDBDBD;
    }
    .separation-area {
      height: 10px;
    }
  }

</style>
