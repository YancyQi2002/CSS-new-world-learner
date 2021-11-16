<template>
  <Attribute
      msg="background - image 属性"
      introduction="background - image 是使用频率比较高的一个属性，"
      grammatical-structure="background-image: none | &lt;image&gt;"
      info="这个语法中出现的 &lt; image &gt; 是一种数据类型，包括以下类型和函数：<ul>
        <li>&lt;url&gt;</li>
        <li>&lt;gradient&gt;</li>
        <li>element( )</li>
        <li>image( )</li>
        <li>image-set( )</li>
        <li>cross-fade( )</li>
        <li>paint( ) <sup>[1]</sup></li>
      </ul>"
      notes="[1] : paint( ) 函数是 CSS Paint API 带来的新成员，相关规范在 2016 年才开始制定。"
  />
</template>

<script setup>
import Attribute from '../Attribute.vue'
</script>

<style scoped>

</style>