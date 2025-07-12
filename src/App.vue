<template>
  <el-container class="h-screen">
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <RouterView/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
