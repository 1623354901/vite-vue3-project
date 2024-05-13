<template>
  <div class="logo">
    <img :src="logo" />
    <p>中金支付</p>
  </div>
  
</template>

<script lang="ts" setup>


const logo = ref(new URL(`@/assets/logo.png`, import.meta.url).href);


</script>

<style scoped lang="scss">
.logo {
  display: flex;
  align-items: center;
  height: 50px;
  img {
    width: 50px;
  }
  p {
    flex: 1;
    text-align: center;
  }
}
// .el-menu-vertical-demo:not(.el-menu--collapse) {
//   width: 200px;
//   min-height: 400px;
// }
</style>