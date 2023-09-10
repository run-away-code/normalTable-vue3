<template>
  <div class="common-layout">
    <!-- <el-container>
      <el-header class="Header">Header</el-header>
      <el-container>
        <el-aside width="200px" class="Aside">Aside</el-aside> -->
        <el-main>
          <router-view></router-view>
        </el-main>
      <!-- </el-container>
    </el-container> -->
  </div>
</template>

<style scope>
* {
  margin: 0;
  padding: 0;
}
#vite-app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.Header {
  background: #ccc;
}
.Aside {
  width: 200px;
  height: 1000px;
  background: #ccc;
}
</style>
