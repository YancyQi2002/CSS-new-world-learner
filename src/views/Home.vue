<template>
  <el-container>
    <el-header>学习 CSS 新世界</el-header>
    <el-container>
      <el-aside width="300px">
        <el-menu :default-openeds="['1', '3']">
          <router-link :to="{name: 'Introduction', params: {type: '1'}}">
            <el-menu-item index="1">
              <template #title><i class="el-icon-chat-dot-round"></i>第一章 概述</template>
            </el-menu-item>
          </router-link>
          <el-sub-menu index="2">
            <template #title><i class="el-icon-message"></i>第二章 需要提前了解的知识</template>
            <el-sub-menu index="2-1">
              <template #title style="color: #909399;">2.1 互通互联的CSS数据类型</template>
              <el-menu-item-group>
                <template class="text-2xl" #title style="color: #909399;">2.1.1 为什么关注数据类型</template>
                <router-link :to="{name: 'background-image 属性', params: {type: '2'}}">
                  <el-menu-item index="1-1">background-image 属性</el-menu-item>
                </router-link>
                <router-link :to="{name: 'mask-image 属性', params: {type: '3'}}">
                  <el-menu-item index="1-2">mask-image 属性</el-menu-item>
                </router-link>
              </el-menu-item-group>
              <el-menu-item-group>
                <template class="text-2xl" #title style="color: #909399;">2.1.2 几个常见数据类型</template>
                <router-link :to="{name: 'shape-outside 属性', params: {type: '4'}}">
                  <el-menu-item index="1-3">shape-outside 属性</el-menu-item>
                </router-link>
                <router-link :to="{name: 'color 数据类型', params: {type: '5'}}">
                  <el-menu-item index="1-4">color 数据类型</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="2-2">
              <template #title style="color: #909399;">2.2 学会看懂CSS属性值定义语法</template>
              <el-menu-item-group>
                <template class="text-2xl" #title style="color: #909399;">2.2.1 学习CSS属性值定义语法的好处</template>
                <router-link :to="{name: 'linear-gradient', params: {type: '6'}}">
                  <el-menu-item index="1-5">线性渐变</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>

</script>

<style scoped>
  .el-header {
    @apply text-3xl;
    font-family: "华文行楷";
    color: var(--el-text-color-primary);
    background-color: aqua;
    line-height: 60px;
  }

  .el-header, .el-aside, .el-main {
    color: var(--el-text-color-primary);
  }

  .el-aside {
    height: 1000px;
    background-color: #FFF;
    line-height: 200px;
  }

  .el-main {
    @apply text-center;
    background-color: #E9EEF3;
    line-height: 160px;
  }

  .el-menu-item:before {
    background-color: #FFF;
  }

  .is-active {
    background-color: #ECF5FF;
  }

</style>