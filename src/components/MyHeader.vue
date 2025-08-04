<template>
  <el-menu mode="horizontal" :ellipsis="false">
    <div
      class="w-full h-full flex justify-between items-center pr-12 transition-all duration-500"
      :class="{ 'logo-open-pl': !appStore.asideIsCollapse, 'logo-close-pl': appStore.asideIsCollapse }">
      <div class="h-full flex items-center"
           @click="appStore.asideIsCollapse = !appStore.asideIsCollapse">
        <img src="@/static/element-plus-logo.svg" alt="Element logo" class="w-28"/>
      </div>
      <div class="flex">
        <el-dropdown placement="top-start">
          <el-icon :size="24" :color="appStore.heatherIconColor">
            <LightIcon v-if="appStore.systemTheme === 'light'"/>
            <DarkIcon v-if="appStore.systemTheme === 'dark'"/>
            <SystemIcon v-if="appStore.systemTheme === 'system'"/>
          </el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="appStore.changeDarkMode('light')">
                <div class="flex items-center">
                  <el-icon :size="20" :color="appStore.heatherIconColor">
                    <LightIcon/>
                  </el-icon>
                  <el-text class="ml-2">亮色模式</el-text>
                </div>
              </el-dropdown-item>
              <el-dropdown-item @click="appStore.changeDarkMode('dark')">
                <div class="flex items-center">
                  <el-icon :size="20" :color="appStore.heatherIconColor">
                    <DarkIcon/>
                  </el-icon>
                  <el-text class="ml-2">暗色模式</el-text>
                </div>
              </el-dropdown-item>
              <el-dropdown-item @click="appStore.changeDarkMode('system')">
                <div class="flex items-center">
                  <el-icon :size="20" :color="appStore.heatherIconColor">
                    <SystemIcon/>
                  </el-icon>
                  <el-text class="ml-2">跟随系统</el-text>
                </div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </el-menu>
</template>

<script setup lang="ts">
import LightIcon from '@/components/LightIcon.vue';
import DarkIcon from '@/components/DarkIcon.vue';
import SystemIcon from '@/components/SystemIcon.vue';
import {onMounted} from 'vue'
import {useAppStore} from '@/stores/counter.ts'

const appStore = useAppStore()
onMounted(() => {
  appStore.getSystemTheme()
})
</script>

<style scoped>
.logo-open-pl {
  padding-left: 200px;
}

.logo-close-pl {
  padding-left: calc(var(--el-menu-icon-width) + var(--el-menu-base-level-padding) * 2);
}
</style>
