<template>
  <Breadcrumb
    :msg = "msg"
  ></Breadcrumb>

  <el-card class="box-card leading-8">
    <div>
      {{ introduction }}其语法结构为：
      <br>
      <code>{{ grammaticalStructure }}</code>
    </div>
    <el-divider></el-divider>
    <div v-html="info"></div>
    <el-divider></el-divider>
    <div v-html="notes"></div>
  </el-card>
</template>

<script setup>
import Breadcrumb from "./Breadcrumb.vue"
defineProps({
  msg: String,
  introduction: String,
  grammaticalStructure: String,
  info: String,
  notes: String
})
</script>

<style scoped>

</style>