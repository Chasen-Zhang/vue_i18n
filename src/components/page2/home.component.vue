<template>
  <div id="home">
    <router-link class="list" to="/home2/partA">跳转到02partA</router-link>
    <router-link class="list listBig" to="/home">跳转到01页</router-link>

    <router-view></router-view>
    <!--<h1>{{ msg }}</h1>

    <div class="img">

    </div>-->
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
  .img{
    height: 300px;
    width: 300px;
    background: url("../../assets/test.jpg") no-repeat;
  }
</style>
