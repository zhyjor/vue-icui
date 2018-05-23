<template>
  <div class="demo-wa">
    <v-icui-handlerbar></v-icui-handlerbar>

  </div>
</template>

<script type="text/ecmascript-6">
  import twContent from '../components/twHandler.vue'
  export default {
    name: 'handler',
    data () {
      let liked = false
      return {
        liked: liked
      }
    },
    methods: {
      likeClick () {
        this.liked = !this.liked
      }
    },
    components:{
      twContent
    }
  }

</script>

<style scoped lang="scss">
.demo-wa{
  background-color: #0d0d0d;
}
</style>
