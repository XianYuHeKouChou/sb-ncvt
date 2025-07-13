<template>
  <el-menu mode="horizontal" :ellipsis="false">
    <div
      class="w-full h-full flex justify-between items-center pr-12 transition-all duration-500"
      :class="{ 'logo-open-pl': !$global.asideIsCollapse, 'logo-close-pl': $global.asideIsCollapse }">
      <div class="h-full flex items-center"
           @click="$global.asideIsCollapse = !$global.asideIsCollapse">
        <img src="@/static/element-plus-logo.svg" alt="Element logo" class="w-28 logo"/>
      </div>
      <div class="flex">
        <el-dropdown placement="top-start">
          <el-icon :size="24" :color="$global.appIsDark? '#ffffff' : '#505050'">
            <LightIcon v-if="$global.appIsDark === false"/>
            <DarkIcon v-if="$global.appIsDark === true"/>
            <SystemIcon v-if="$global.appIsDark === 'system'"/>
          </el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="$global.changeDarkMode(false)">
                <div class="flex items-center">
                  <el-icon :size="20" color="#505050">
                    <LightIcon/>
                  </el-icon>
                  <el-text class="ml-2">亮色模式</el-text>
                </div>
              </el-dropdown-item>
              <el-dropdown-item @click="$global.changeDarkMode(true)">
                <div class="flex items-center">
                  <el-icon :size="20" color="#505050">
                    <DarkIcon/>
                  </el-icon>
                  <el-text class="ml-2">暗色模式</el-text>
                </div>
              </el-dropdown-item>
              <el-dropdown-item @click="$global.changeDarkMode('system')">
                <div class="flex items-center">
                  <el-icon :size="20" color="#505050">
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
import {onMounted, getCurrentInstance} from 'vue'

onMounted(() => {
  const {appContext} = getCurrentInstance()!
  appContext.config.globalProperties.$global.getDarkMode()
})
</script>

<style scoped>
.logo-open-pl {
  padding-left: 200px;
}

.logo-close-pl {
  padding-left: calc(var(--el-menu-icon-width) + var(--el-menu-base-level-padding) * 2);
}

.logo {
  filter: drop-shadow(rgb(64, 158, 255) 2px 2px 6px);
}
</style>
