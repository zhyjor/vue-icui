<template>
  <div>
    <h3>checkbox 测试</h3>
    <ul>
      <li :key="item.id" v-for="item in items">
        <v-icui-checkbox :left-label="item.tipLabel"/>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    data: function () {
      return {
        items: [
          {
            tipLabel: '运营商：'
          },
          {
            tipLabel: '管理员：'
          },
          {
            tipLabel: '普通人：'
          }
        ]
      }
    },
    methods: {
      handleClick: function (e) {
        console.log('我被点击了:' + e)
      }
    }
  }
</script>
