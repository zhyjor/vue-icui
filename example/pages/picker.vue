<template>
  <div>
    <h3>picker 测试</h3>
    <button style="width: 100px;height: 100px;margin-left: 50px" @click="showPicker(0)" ref="select0">单列选项</button>
    <v-icui-picker @select="handleSelect(0,arguments)" :selected-index="selectedIndex[0]"
                   ref="picker0" :title="title" :cancelTxt="cancelTxt"
                   :confirmTxt="confirmTxt"></v-icui-picker>

    <button style="width: 100px;height: 100px;margin-top: 50px;margin-left: 50px" @click="showPicker(1)" ref="select1">
      点击设置价格
    </button>
    <v-icui-picker @select="handleSelect(1,arguments)" :data="numData" :selected-index="selectedIndex[1]"
                   ref="picker1" :title="title" :cancelTxt="cancelTxt"
                   :confirmTxt="confirmTxt"></v-icui-picker>
  </div>

</template>

<script type="text/ecmascript-6">
  let yuans = []
  let jiaos = []
  let yuanUnit = [{
    text: '元',
    value: 0
  }]
  let jiaoUnit = [{
    text: '角',
    value: 0
  }]

  export default {
    data() {
      return {
        title: '价格设置',
        selectedIndex: [
          [0],
          [0, 0, 0, 0]
        ],
        selectedText: [
          '单列选项',
          '双列选项'
        ],
        cancelTxt: '取消',
        confirmTxt: '确定',
        numData: []
      }
    },
    methods: {
      showPicker(index) {
        let picker = this.$refs['picker' + index]
        picker.show()
      },
      handleSelect(index, args) {
        //选择的项目在这块做处理
        this.selectedText.splice(index, 1, args[2].join('，'))
        console.log(args[1][0] + '>>>' + args[1][1] + '>>>' + args[1][2] + '>>>' + args[1][3] + '>>>')
        var result = parseInt(args[1][0]) + parseInt(args[1][2]) / 10;
        alert('您选择的价格：' + result + '元')
      }
    },
    created () {
      for (var i = 0; i < 100; i++) {
        var obj = new Object()
        obj.text = i
        obj.value = i
        yuans.push(obj)
      }

      for (var i = 0; i < 10; i++) {
        var obj = new Object()
        obj.text = i
        obj.value = i
        jiaos.push(obj)
      }
      this.numData.push(yuans)
      this.numData.push(yuanUnit)
      this.numData.push(jiaos)
      this.numData.push(jiaoUnit)
    },
    mounted () {
      this.$refs.picker0.setData([yuans])
    }
  }
</script>

<style scoped>

</style>
