<template>
  <Attribute
    msg="shape - outside 属性"
    introduction="shape - outside 是 CSS Shapes 布局中的一个属性，"
    grammatical-structure="shape-outside: none | &lt;shape-box&gt; || &lt;basic-shape&gt; | &lt;image&gt;"
    info='<div class="mx-40 text-left">
    ( 1 ) &lt; shape-box &gt; <sup>[1]</sup> 支持的属性值如下：
    <br>&nbsp;&nbsp;&nbsp;&nbsp;1 )&nbsp;&nbsp;<code>&lt; box &gt;</code>
    <br>&nbsp;&nbsp;&nbsp;&nbsp;2 )&nbsp;&nbsp;margin-box
    <br>
    ( 2 ) &lt; basic-shape &gt; <sup>[2]</sup> 支持的属性值如下：
    <br>&nbsp;&nbsp;&nbsp;&nbsp;1 )&nbsp;&nbsp;inset( )
    <br>&nbsp;&nbsp;&nbsp;&nbsp;2 )&nbsp;&nbsp;circle( )
    <br>&nbsp;&nbsp;&nbsp;&nbsp;3 )&nbsp;&nbsp;ellipse( )
    <br>&nbsp;&nbsp;&nbsp;&nbsp;4 )&nbsp;&nbsp;polygon( )
    <br>&nbsp;&nbsp;&nbsp;&nbsp;5 )&nbsp;&nbsp;path( )
    <br>
    ( 3 ) &lt; image &gt; <sup>[3]</sup> 支持的属性值如下：
    <br>&nbsp;&nbsp;&nbsp;&nbsp;1 )&nbsp;&nbsp;<code>&lt; url &gt;</code>
    <br>&nbsp;&nbsp;&nbsp;&nbsp;2 )&nbsp;&nbsp;<code>&lt; gradient &gt;</code>
    <br>&nbsp;&nbsp;&nbsp;&nbsp;3 )&nbsp;&nbsp;element( )
    <br>&nbsp;&nbsp;&nbsp;&nbsp;4 )&nbsp;&nbsp;image( )
    <br>&nbsp;&nbsp;&nbsp;&nbsp;5 )&nbsp;&nbsp;image-set( )
    <br>&nbsp;&nbsp;&nbsp;&nbsp;6 )&nbsp;&nbsp;cross-fade( )
    <br>&nbsp;&nbsp;&nbsp;&nbsp;7 )&nbsp;&nbsp;paint( )
    </div>'
    notes='<div class="text-left">
    [1] : 在 CSS 世界中，用到 margin-box 的属性并不多，shape-outside 属性是一个特例。
    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;虽然 <code>< shape-box ></code> 数据类型并不常用，但 <code>< box ></code> 却很常见， <code>< box ></code> 数据类型包括下面这些属性值：
    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;① content-box ② padding-box ③ border-box
    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-orign 和 background-clip 等 CSS 属性的属性值就是 < box > 数据类型。
    <br>
    [2] : clip-path 和 offset-path 等 CSS 属性的属性值属于 < basic-shape > 数据类型。
    <br>
    [3] : 属性值中 < url > 也是一种数据类型，用于表示使用 url( ) 函数调用的图像资源。
    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt; gradient &gt; 也是一种数据类型，用于表示渐变图像。
    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-image 和 mask-image 等 CSS 属性的属性值就是 < image > 数据类型。
    </div>'
  />
</template>

<script setup>
import Attribute from '../Attribute.vue'
</script>

<style scoped>

</style>