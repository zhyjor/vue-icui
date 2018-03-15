<template>
  <div>
    <div class="wrap">
      <div class="line"/>
      <div class="item" id="scroll-left">
        <ul>
          <li/>
          <li/>
          <li :key="item.id" v-for="item in yuans"> {{ item }} </li>
        </ul>
      </div>
      <span>元</span>
      <div class="item" id="scroll-right">
        <ul>
          <li/>
          <li/>
          <li :key="item.id" v-for="item in jiaos"> {{ item }} </li>
        </ul>
      </div>
      <span>角</span>
    </div>
    <div class="foot-btn">
      <span class="cancel" @click="cancelClick">取消</span>
      <span class="confirm" @click="confirmClick">确定</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {create} from '../../utils'
  import $ from 'jquery'
  import IScroll from 'iscroll'
  export default create({
    name: 'v-icui-picker',
    props: {
      yuans: {
        type: Array,
        required: false
      },
      jiaos: {
        type: Array,
        required: false
      }
    },
    data: function () {
      return {
        result: '',
        yuan: '',
        jiao: '',
        yuansDef: [],
        jiaosDef: []
      }
    },
    created : function () {
      initData()
    },
    methods: {
      cancelClick (event) {
        this.$emit('click', event)
      },
      confirmClick (event) {
        this.$emit('click', event)
      },
      initData () {
        this.yuans = []
        this.jiaos = []
        for (var i = 0; i < 100; i++) {
          this.yuansDef.push(i)
          this.jiaosDef.push(i)
        }
      }
    },
    computed: {
      getResult () {
        // 设置元的滚轮
        var scrollLeft = new IScroll('#scroll-left', {
          vScroll: false,
          snap: 'li',
          hScrollbar: false,
          zoom: true,
          mouseWheel: true,
          wheelAction: 'zoom',
          fadeScrollbars: true
        })

        scrollLeft.on('scrollEnd', function () {
          console.log('我停止了')
          var num = -(scrollLeft.y / 40)
          console.log('滚动条当前信息' + scrollLeft.x + '>>>' + scrollLeft.y + '>>>' + num)
          $('#scroll-left ul').children('li').each(function () {
            var liPosition = $(this).attr('data-id')
            if (num === liPosition) {
              console.log('~~~' + liPosition)
              $(this).addClass('selected')
              this.yuan = $(this).text()
            } else {
              $(this).removeClass('selected')
            }
          })
        })

        var scrollRight = new IScroll('#scroll-right', {
          vScroll: false,
          snap: 'li',
          hScrollbar: false,
          zoom: true,
          mouseWheel: true,
          wheelAction: 'zoom',
          fadeScrollbars: true
        })

        scrollRight.on('scrollEnd', function () {
          console.log('我停止了')
          var num = -(scrollRight.y / 40)
          console.log('滚动条当前信息：' + scrollRight.x + '>>>' + scrollRight.y + '>>>' + num)
          $('#scroll-right ul').children('li').each(function () {
            var liPosition = $(this).attr('data-id')
            if (num === liPosition) {
              $(this).addClass('selected')
              this.jiao = $(this).text()
            } else {
              $(this).removeClass('selected')
            }
          })
        })

        this.result = parseInt(this.yuan) + parseInt(this.jiao)
        return this.result
      }
    }
  })
</script>

<style scoped lang="scss">
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    color: #000;
    font-size: 14px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    overflow-y: auto
  }

  .wrap {
    width: 100%;
    height: 200px;
    background: #fff;
    position: relative;
    text-align: center;
    margin-top: 50px;
    border-top: 1px solid #D6DDE7;
    display: inline-block;
  }

  .wrap .line {
    height: 40px;
    border-top: 1px solid #D6DDE7;
    border-bottom: 1px solid #D6DDE7;
    width: 100%;
    position: absolute;
    top: 40%
  }

  .wrap .item {
    margin: 0;
    padding: 0 3%;
    display: inline-block;
    vertical-align: top;
    text-align: center;
    overflow: hidden;
    height: 200px;
  }

  .wrap .item ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
    min-height: 120px;
    width: 80px;
    overflow: hidden;
  }

  .wrap .item ul li {
    height: 40px;
    line-height: 40px;
    color: #555;
    font-size: 15px
  }

  .wrap .item ul li.selected {
    color: #26BCD5;
    font-size: 22px;
  }

  .wrap span {
    height: 200px;
    line-height: 200px;
    color: #26BCD5;
    font-size: 20px;
    margin-left: -20px;
  }

  /*底部按钮*/
  .foot-btn {
    position: relative;
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-top: 1px solid #D6DDE7;
    border-bottom: 1px solid #D6DDE7;
  }

  .cancel {
    position: relative;
    margin-left: 50px;
    float: left;
    color: #444;
  }

  .confirm {
    position: relative;
    margin-right: 50px;
    float: right;
    color: #26BCD5;
  }

  .warn {
    margin-top: 150px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #555;
    display: inline-block;
  }

</style>
