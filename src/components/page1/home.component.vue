<template>
  <div id="home">
    <router-link class="list" to="/home/partA">跳转到001partA</router-link>
    <router-link class="list listBig" to="/home2">跳转到00002页</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        msg: 'test'
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
