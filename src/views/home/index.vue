<template>
  <div>
      Home
  </div>
</template>
<script setup lang="ts">

import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

console.log(router, 'router')
console.log(route, 'route')


</script>
<style lang="scss">
  
</style>