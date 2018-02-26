<template>
  <div class="page page-with-padding">
    <div class="buttons-big">
      <v-icui-button type="primary">页面主要操作 Normal</v-icui-button>
      <v-icui-button type="primary" is-loading>页面主要操作 Loading</v-icui-button>
      <v-icui-button type="primary" disabled>页面主要操作 Disabled</v-icui-button>
      <v-icui-button type="default">页面次要操作 Normal</v-icui-button>
      <v-icui-button type="default" is-loading>页面次要操作 Loading</v-icui-button>
      <v-icui-button type="default" disabled>页面次要操作 Disabled</v-icui-button>
      <v-icui-button type="warn">警告类操作 Normal</v-icui-button>
      <v-icui-button type="warn" is-loading>警告类操作 Loading</v-icui-button>
      <v-icui-button type="warn" disabled>警告类操作 Disabled</v-icui-button>
    </div>

    <div class="buttons-plain">
      <v-icui-button type="default" :plain="true">按钮</v-icui-button>
      <v-icui-button type="default" :plain="true" disabled>按钮</v-icui-button>
      <v-icui-button type="primary" :plain="true">按钮</v-icui-button>
      <v-icui-button type="primary" :plain="true" disabled>按钮</v-icui-button>
    </div>

    <div class="buttons-mini">
      <v-icui-button type="primary" :mini="true">按钮</v-icui-button>
      <v-icui-button type="default" :mini="true">按钮</v-icui-button>
      <v-icui-button type="warn" :mini="true">按钮</v-icui-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .buttons-big {
    display: block;
    margin: 10px auto;
  }

  .buttons-plain {
    display: block;
    width: 60%;
    margin: 10px auto;
  }

  .buttons-mini {
    display: block;
    width: 60%;
    margin: 10px auto;
  }
</style>
