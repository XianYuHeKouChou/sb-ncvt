<template>
  <el-container class="h-screen">
    <el-header>
      <my-header/>
    </el-header>
    <el-container>
      <el-aside style="width: auto">
        <Aside/>
      </el-aside>
      <el-main style="padding: 0" v-loading="appStore.appLoading">
        <RouterView/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import {ElContainer, ElHeader, ElAside, ElMain} from "element-plus";
import MyHeader from '@/components/MyHeader.vue';
import Aside from '@/components/Aside.vue';
import {useAppStore} from "@/stores/counter.ts";

const appStore = useAppStore()
</script>
