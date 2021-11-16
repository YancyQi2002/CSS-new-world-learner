<template>
  <div id="app">
    <img id="img" alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Hello World" />
    <br />
    <HelloWorld msg="Using Vue 3 + Vite + TailwindCSS + Element Plus + Pnpm" />
    <!-- <el-button class="m-10" type="primary" icon="el-icon-success" @click="count++">count is: {{ count }}</el-button> -->
    <el-button class="m-10" type="primary" @click="$router.push('/home')">Welcome to the Homepage !</el-button>
  </div>
</template>

<script setup>
import HelloWorld from '../components/HelloWorld.vue'
</script>

<style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  #img {
    @apply ml-auto mr-auto w-1/2;
  }
</style>