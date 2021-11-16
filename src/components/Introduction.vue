<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/home' }">Home</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/introduction'}">Introduction</el-breadcrumb-item>
    <el-breadcrumb-item />
  </el-breadcrumb>
  <el-card>
    <div class="float-left">
      <img src="../assets/img/CSSnewworld.png">
    </div>
    <div class="mt-5">
      <h1 class="text-3xl">进 阶 学 习 C S S</h1>
      <el-divider class="mx-80"></el-divider>
      <div class="introduction">
        <h3 class="text-xl select-none">学 习 C S S 的 精 华 和 细 节</h3>
        <h3 class="text-xl select-none">按 照 《 C S S 新 世 界 》 的 目 录 顺 序 学 习 C S S</h3>
        <h3 class="text-xl select-none">完 成 相 对 应 示 例 的 练 习</h3>
      </div>
      <el-button-group class="px-14 w-2/3">
        <el-button class="mt-5 w-1/3" onclick="window.open('http://wpa.qq.com/msgrd?v=3&uin=1195029215&site=qq&menu=yes', '_blank')">QQ : 1195029215</el-button>
        <el-button class="mt-5 w-1/3" onclick="window.open('https://message.bilibili.com/#whisper/mid314108035', '_blank')">BiliBili : YancyQi</el-button>
        <el-button class="mt-5 w-1/3" onclick="window.open('mailto:xiaoyixiu2002@gmail.com', '_blank')">E-mail : Gmail</el-button>
        <el-button class="-mt-0 w-1/3" onclick="window.open('https://github.com/YancyQi2002', '_blank')">Github: YancyQi2002</el-button>
        <el-button class="-mt-0 w-1/3" onclick="window.open('https://yx-blog.vercel.app', '_blank')">Blog: YX-BLOG</el-button>
        <el-button class="-mt-0 w-1/3" onclick="window.open('mailto:1195029215@qq.com', '_blank')">E-mail : QQMail</el-button>
      </el-button-group>
    </div>
  </el-card>
</template>

<script setup>

</script>

<style scoped>
  .introduction > h3 {
    @apply leading-10;
  }
</style>