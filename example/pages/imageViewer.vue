<template>
  <div class="wrapper">
    <div class="top-close">
      <div class="close-wrapper">
        <svg viewBox="0 0 24 24" class=""><g><path d="M13.414 12l5.793-5.793a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 0 0 1.414 1.414L12 13.414l5.793 5.793a.996.996 0 0 0 1.414 0 1 1 0 0 0 0-1.414L13.414 12z"></path></g></svg>
      </div>

    </div>
    <div class="container">

    </div>
    <div bottom-handler></div>

  </div>

</template>

<script type="text/ecmascript-6">

</script>

<style scoped lang="scss">
  .wrapper {
    .top-close {
      z-index: 2;
      position: relative;
      box-direction: normal;
      box-orient: vertical;
      flex-direction: column;
      display: flex;
      box-sizing: border-box;
      .close-wrapper{
        height: 3.5rem;
        padding:0 0.98rem;
        box-pack: center;
        justify-content: center;
        box-direction: normal;
        box-orient: horizontal;
        flex-direction: row;
        svg{
          color: rgb(255, 255, 255);
          height: 1.75rem;
        }
      }
    }
  }

</style>
