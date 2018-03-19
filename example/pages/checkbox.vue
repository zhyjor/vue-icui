<template>
  <div>
    <h3>checkbox 在ul中</h3>
    <ul>
      <li :key="item.id" v-for="item in items">
        <v-icui-checkbox :tip-label="item.tipLabel"/>
      </li>
    </ul>
    <h3>checkbox 独立使用</h3>
    <v-icui-checkbox :tip-label="test1.tipLabel"/>
    <v-icui-checkbox :tip-label="test2.tipLabel"/>
    <v-icui-checkbox :tip-label="test3.tipLabel"/>
  </div>
</template>

<script>
  export default{
    data: function () {
      return {
        items: [
          {
            tipLabel: '运营商'
          },
          {
            tipLabel: '管理员'
          },
          {
            tipLabel: '普通人'
          }
        ],
        test1: {
            tipLabel: '测试'
        },
        test2: {
          tipLabel: '测试'
        },
        test3: {
          tipLabel: '测试'
        }
      }
    },
    methods: {
      handleClick: function (e) {
        console.log('我被点击了:' + e)
      }
    }
  }
</script>

<style scoped lang="scss">
  ul li{
    margin: 0;
    padding: 0;
    line-height: 0;
  }
</style>
