<script setup lang="ts">

import { useTestStore } from '@/store'
import { storeToRefs } from 'pinia';

import { loginApi } from '@/api/auth'

defineProps<{ msg: string }>()

const store = useTestStore()
const { count, double } = storeToRefs(store)
const { increment } = store

function login() {
  const req = {username: '123', password: '456'}
  loginApi(req).then(res => {
    console.log(res ,'res')
  })
}

</script>

<template>
  <el-button @click="login">login</el-button>

  <div class="card">
    <div>count {{ count }}</div>
    <div>double {{ double }}</div>
    <button type="button" @click="increment" >add</button>
    
  </div>

 
  <el-button type="success"><i-ep-SuccessFilled />Success</el-button>

  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style lang="scss" scoped>
.read-the-docs {
  color: $bg-color;
}
</style>
