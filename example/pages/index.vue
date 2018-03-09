<template>
  <div class="page">
    <div class="page__hd">
      <img :src="logoImg" alt="" class="logo">
      <h1 class="page__title">ICUI-VUE</h1>
    </div>

    <v-icui-group :title="navGroup.groupTitle" v-for="navGroup in navs" :key="navGroup.index">
      <v-icui-cell v-for="nav in navGroup.navItems" :key="nav.name" :to="nav.path" is-link :title="nav.name">
        <i class="cell-icon iconfont" :class="'icon-' + nav.icon" slot="icon"/>
        <v-icui-badge slot="ft" v-if="nav.status === 'todo'">Todo</v-icui-badge>
      </v-icui-cell>
    </v-icui-group>

  </div>
</template>

<script>
import { navs } from '../router'
import logoImg from '../assets/images/icon_logo.jpg'

export default {
  data () {
    return {
      logoImg,
      navs,
      keyword: '',
      componentList: []
    }
  },

  mounted () {
    navs.map(navGroup => {
      this.componentList = this.componentList.concat(navGroup.navItems)
    })
  },

  computed: {
    filterResult () {
      return this.componentList.filter(value => new RegExp(this.keyword, 'i').test(value.name))
    }
  }
}
</script>

<style scoped lang="scss">
  .logo {
    display: block;
    margin: 0 auto;
    width: 75px;
  }

  .page__hd {
    padding: 40px;

    .page__title {
      text-align: center;
      font-size: 20px;
      font-weight: 400;
    }
  }

  .page {
    margin-bottom: 0;
  }

  .cell-icon {
    display: block;
    margin-right: 5px;
    color: #2196f3;
    overflow: hidden;
    font-size: 20px;
    width: 25px;
    text-align: center;
  }

  .footer-copyright {
    margin: 40px 0 20px;
  }
</style>
