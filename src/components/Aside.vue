<template>
  <el-menu mode="vertical" :collapse="appStore.asideIsCollapse" class="w-[200px]" :router="true">
    <el-menu-item index="scriptcat">
      <el-icon>
        <img src="@/static/scriptcat.png" alt="脚本猫">
      </el-icon>
      <span>Scriptcat</span>
    </el-menu-item>
    <el-menu-item index="ocs">
      <el-icon>
        <img src="@/static/OCS.png" alt="OCS网课助手">
      </el-icon>
      <span>OCS网课助手</span>
    </el-menu-item>
    <el-menu-item index="ncvt">
      <el-icon>
        <img src="@/static/ncvt.jpg" alt="NCVT Beta" class="rounded-full">
      </el-icon>
      <span>NCVT Beta</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import {useAppStore} from '@/stores/counter.ts'

const appStore = useAppStore()
</script>
