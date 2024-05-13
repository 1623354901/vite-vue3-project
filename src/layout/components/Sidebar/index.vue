<template>
  <div class="sidebar">
    <Logo />
    <Menu />
  </div>
</template>

<script lang="ts" setup>

import Logo from './Logo.vue'
import Menu from './Menu.vue'

</script>

<style lang="scss" scoped>
.sidebar {
  height: 100%;
  // background: #545c64;
}
</style>