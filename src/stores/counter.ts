import {defineStore} from 'pinia'
import utils from "@/assets/utils.ts";

export const useAppStore = defineStore('appStore', {
  state: () => {
    return {
      appIsDark: null as boolean | string | null,
      mediaChange: null as any,
      asideIsCollapse: false as boolean,
    }
  },
  actions: {
    /**
     * 获取当前颜色模式
     */
    getDarkMode() {
      const value = utils.getLocalStorage('appIsDark')
      if (typeof value === 'boolean') {
        this.appIsDark = value;
      }
      if (typeof value === 'string') {
        this.appIsDark = value
      }
      if (value === null || value === undefined || value === 'system') {
        this.appIsDark = 'system'
        this.systemThemeListener()
      }
      this.toggleDarkMode()
    },
    /**
     * 系统主题监听
     */
    systemThemeListener() {
      if (this.appIsDark === 'system') {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        this.mediaChange = () => this.toggleDarkMode()
        mediaQuery.addEventListener('change', this.mediaChange)
      } else {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        mediaQuery.removeEventListener('change', this.mediaChange)
      }
    },
    /**
     * 切换颜色模式
     */
    toggleDarkMode() {
      if (this.appIsDark === true) {
        document.documentElement.classList.add('dark')
      }
      if (this.appIsDark === false) {
        document.documentElement.classList.remove('dark')
      }
      if (this.appIsDark === 'system') {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }
    },
    /**
     * 给外部的切换颜色模式
     */
    changeDarkMode(value: boolean | string) {
      this.appIsDark = value
      utils.setLocalStorage('appIsDark', value)
      this.toggleDarkMode()
      this.systemThemeListener()
    }
  }
})
