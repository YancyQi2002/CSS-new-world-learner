<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
// import { ref } from 'vue'
// const count = ref(0)
</script>

<template>
  <router-view></router-view>
</template>

<style>
  ::-webkit-scrollbar {
    @apply hidden;
  }
  /* IE 10+ */
  .element { -ms-overflow-style: none; }
  /* Chrome 和 Safari */
  .element::-webkit-scrollbar { width: 0 !important }
  /* Firefox */
  .element { overflow: -moz-scrollbars-none; }

  .el-card {
    @apply mt-5;
  }
</style>
