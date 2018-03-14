<template>
  <div class="icui-cells icui-cells_checkbox">
    <label class="icui-cell icui-check__label" for="s11">
      <div class="icui-cell__hd" @click="handleClick">
        <input type="checkbox" class="icui-check" name="checkbox1" id="s11" checked="checked">
        <i class="icui-icon-checked"/>
      </div>
      <div class="icui-cell__bd">
        <p>{{ tipLabel }}</p>
      </div>
    </label>
  </div>
</template>

<script type="text/ecmascript-6">
  import {create} from '../../utils'
  export default create({
    name: 'v-icui-checkbox',
    props: {
      tipLabel: {
        type: String,
        default: 'default',
        required: true
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
