<script setup lang="ts">

let timer: any

function test() { 
  timer = setTimeout(() => {
    window.location.href = 'https://www.baidu.com'
  }, 3000)
  window.location.href = 'weixin://'

  
}

onMounted(() => {
  document.addEventListener('visibilitychange', () => {
    if(document.hidden) {
      clearTimeout(timer)
    }
  })


});
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
  
  <!-- <button class="btn" @click="test">test</button> -->
</template>

<style scoped>
</style>
