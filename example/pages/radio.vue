<template>
  <div>
    <h3>radio 测试</h3>
    <ul>
      <li :key="item.id" v-for="item in items">
        <v-icui-radio :left-tip="item.leftTip" @click="handleClick"/>
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
            leftTip: '运营商：'
          },
          {
            leftTip: '管理员：'
          },
          {
            leftTip: '普通人：'
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
