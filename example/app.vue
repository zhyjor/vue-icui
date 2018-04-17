<template>
  <div id="app">
    <transition :name="$root.transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<style scoped lang="scss">
  #app {
    height: 100%;
  }
</style>
