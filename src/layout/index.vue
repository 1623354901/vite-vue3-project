<template>
  <el-container class="layout">
    <el-aside class="aside">
      <Sidebar />
    </el-aside>
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">

import Sidebar from './components/Sidebar/index.vue'
import Header from './components/Header/index.vue'


</script>
<style lang="scss">
  .layout {
    height: 100vh;
  }
</style>