<template>
  <div>
    <h3>picker 测试</h3>
    <v-icui-picker/>
  </div>
</template>

<script type="text/ecmascript-6">

  export default{
    methods: {
      cancelClick: function (e) {
        alert('未做任何修改')
      },
      confirmClick: function (e) {
        alert('您选择了确定')
      }
    }
  }
</script>
