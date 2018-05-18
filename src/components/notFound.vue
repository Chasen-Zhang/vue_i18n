<template>
  <div class="noFound wh100 pr" id="noFound">
    <div class="wrap">
      <img class="img" src="../assets/img/404.png" height="249" width="271"/>
      <img src="../assets/img/4042.png" height="230" width="188"/>
    </div>
  </div>
</template>
<script>
  export default {
    name:'noFound'
  }
</script>
<style scoped lang="scss">
.noFound{
  background-color: #f1f1f1;
  .wrap{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
}
</style>
