<template>
  <el-container class="h-screen">
    <el-header>
      <Header/>
    </el-header>
    <el-container>
      <el-aside style="width: auto">
        <Aside/>
      </el-aside>
      <el-main style="padding: 0">
        <RouterView/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import Aside from '@/components/Aside.vue';
</script>
