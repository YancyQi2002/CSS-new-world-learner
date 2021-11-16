<template>
  <Breadcrumb
      msg = "linear-gradient"
  ></Breadcrumb>

  <el-card class="box-card leading-8">
    <main class="m-auto font-extrabold subpixel-antialiased text-xl">
      线&nbsp;&nbsp;性&nbsp;&nbsp;渐&nbsp;&nbsp;变
    </main>
  </el-card>

  <el-card class="box-card leading-8">
    <main-first>
      CSS 开发者会写出类似下面的 CSS 线性渐变代码
      <br />
      <div class="bg-gray-300">
        <code>
          background: linear-gradient(to bottom, deepskyblue, deeppink);
        </code>
      </div>
      上面这句 CSS 从语法和功能上看是没有任何问题的，线性渐变可以正常渲染，但在写法上有瑕疵，"to buttom" 是多余的
    </main-first>
    <br />
    <main-second>
      直接使用下面的书写方式即可
      <br />
      <div class="bg-gray-300">
        <code>
          background: linear-gradient(deepskyblue, deeppink);
        </code>
      </div>
    </main-second>
    <el-divider class="divider1"></el-divider>
    <main-third class="-m-4">
      线性渐变语法中的一个细节知识：
      <div class="inline-block px-6 bg-blue-300">
        线性渐变的方向设置是可以省略的
      </div>
    </main-third>
  </el-card>

  <el-card class="box-card leading-8">
    <main class="m-auto font-extrabold subpixel-antialiased text-xl">
      实&nbsp;&nbsp;战&nbsp;&nbsp;测&nbsp;&nbsp;试
    </main>
  </el-card>

  <el-row :gutter="12">
    <el-col :span="12">
      <el-card class="p-0">
        <header class="h-16 leading-8 bg-gray-300">
          <code>
            background: linear-gradient(to bottom, deepskyblue, deeppink);
          </code>
        </header>
        <el-divider class="divider1"></el-divider>
        <main class="leading-8 test1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Commodi earum labore minus nemo numquam pariatur quos ratione,
          recusandae voluptate voluptatibus? Dolore.
        </main>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card class="p-0">
        <header class="h-16 leading-8 bg-gray-300">
          <code>
            background: linear-gradient(deepskyblue, deeppink);
          </code>
        </header>
        <el-divider class="divider1"></el-divider>
        <main class="leading-8 test2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquid, amet commodi cum dolorum eligendi excepturi explicabo
          id ipsa ipsam laudantium nisi nobis numquam quas reiciendis rerum
          unde voluptatum? Dignissimos, tenetur?
        </main>
      </el-card>
    </el-col>
  </el-row>

  <el-divider></el-divider>

  <div class="-mt-16">
    看懂 CSS 属性值定义语法的好处：不仅有助于快速了解 CSS 新属性，还有助于发现别人注意不到的细节知识。
  </div>
</template>

<script setup>
  import Breadcrumb from "../Breadcrumb.vue"
</script>

<style scoped>
  .divider1 {
    margin: 24px -20px;
    width: 150%;
  }

  .test1 {
    background: linear-gradient(to bottom, deepskyblue, deeppink);
  }

  .test2 {
    background: linear-gradient(deepskyblue, deeppink);
  }
</style>