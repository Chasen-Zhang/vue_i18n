<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'test'
    }
  },
  created:function () {
    // 为给定 ID 的 user 创建请求
    var that  = this;
    this.getRequest('../static/test.json')
      .then(function (response) {
        console.log('first:'+response.data.data);
        that.$localStorage.set('someBoolean', 2222)
        return response.data.data;
      })
      .then(function (data) {
        console.log('two:'+data,that.$localStorage.get('someBoolean'));

      })
      .catch(function (error) {
        console.log(error);
      });

  }
}
</script>

<style lang="scss" scoped>
  #app{
    width: 100%;
    height:100%;
  }
</style>
