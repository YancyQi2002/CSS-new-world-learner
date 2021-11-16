<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/home' }">Home</el-breadcrumb-item>
    <el-breadcrumb-item class="font-bold">{{ msg }}</el-breadcrumb-item>
    <el-breadcrumb-item />
  </el-breadcrumb>
</template>

<script setup>
defineProps({
  msg: String
})
</script>

<style scoped>

</style>