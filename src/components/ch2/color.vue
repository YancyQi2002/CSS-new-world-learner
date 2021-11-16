<template>
  <Attribute
    msg="color 数据类型"
    introduction="&lt; color &gt; 数据类型使用非常广泛，几乎所有带有 color 关键字的 CSS 属性都支持这个数据类型，"
    grammatical-structure="color: &lt;color&gt;"
    info="这里的 &lt; color &gt; 数据类型支持的属性值如下：<ul>
        <li>&lt; rgb( ) &gt;</li>
        <li>&lt; rgba( ) &gt;</li>
        <li>&lt; hsl( ) &gt;</li>
        <li>&lt; hsla( ) &gt;</li>
        <li>&lt; hex-color &gt;</li>
        <li>&lt; named-color &gt;</li>
        <li>currentColor</li>
        <li>&lt; deprecated-system-color &gt;<sup>[1]</sup></li>
      </ul>"
    notes="[1] : &lt; deprecated-system-color &gt; 指废弃的系统颜色。"
  />
  <el-divider></el-divider>
  <div class="-mt-16">
    更完整的 CSS 数据类型，参考：<a href="https://www.zhangxinxu.com/wordpress/2019/11/css-value-type/" target="_blank" class="text-blue-500">《CSS值类型文档大全》</a>
  </div>
</template>

<script setup>
import Attribute from '../Attribute.vue'
</script>

<style scoped>

</style>