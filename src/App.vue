<template>
  <el-container class="h-screen">
    <el-header>
      <my-header />
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
import MyHeader from '@/components/MyHeader.vue';
import Aside from '@/components/Aside.vue';
</script>
