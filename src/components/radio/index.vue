<template>
  <div class="icui-cells icui-cells_radio">
    <label class="icui-cell icui-check__label" for="x11">
      <div class="icui-cell__bd">
        <p>{{ leftTip }}</p>
      </div>
      <div class="icui-cell__ft" @click="handleClick">
        <input type="radio" class="icui-check" name="radio1" id="x11">
        <span class="icui-icon-checked"/>
      </div>
    </label>
  </div>
</template>

<script type="text/ecmascript-6">

  import {create} from '../../utils'

  export default create({
    name: 'v-icui-radio',
    props: {
      leftTip: {
        type: String,
        required: true,
        default: 'default'
      }
    },
    methods: {
      handleClick (event) {
        this.$emit('click', event)
      }
    }

  })

</script>

<style scoped lang="scss">

</style>
