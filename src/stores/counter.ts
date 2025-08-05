import {defineStore} from 'pinia'
import utils from "@/assets/utils.ts";

export const useAppStore = defineStore('appStore', {
  state: () => {
    return {
      systemTheme: null as null | string,
      heatherIconColor: '#ffffff' as string,
      mediaChange: null as any,
      asideIsCollapse: false as boolean,
      appLoading: false as boolean,
    }
  },
  actions: {
    /**
     * 获取当前颜色模式
     */
    getSystemTheme() {
      const value = utils.getLocalStorage('systemTheme')
      if (typeof value === 'string') {
        this.systemTheme = value
      }
      if (value === null || value === undefined) {
        this.systemTheme = 'system'
        utils.setLocalStorage('systemTheme', this.systemTheme)
      }
      this.changeSystemTheme()
    },
    /**
     * 系统主题监听
     */
    systemThemeListener() {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      if (this.systemTheme === 'system') {
        this.mediaChange = () => this.changeSystemTheme()
        mediaQuery.addEventListener('change', this.mediaChange)
      } else {
        mediaQuery.removeEventListener('change', this.mediaChange)
      }
    },
    /**
     * 修改颜色模式
     */
    changeSystemTheme() {
      if (this.systemTheme === 'dark') {
        document.documentElement.classList.add('dark')
        this.heatherIconColor = '#ffffff'
      }
      if (this.systemTheme === 'light') {
        document.documentElement.classList.remove('dark')
        this.heatherIconColor = '#505050'
      }
      if (this.systemTheme === 'system') {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.documentElement.classList.add('dark')
          this.heatherIconColor = '#ffffff'
        } else {
          document.documentElement.classList.remove('dark')
          this.heatherIconColor = '#505050'
        }
      }
    },
    /**
     * 给外部的切换颜色模式
     * @param value {string} - 'system' | 'dark' | 'light'
     */
    changeDarkMode(value: string) {
      this.systemTheme = value
      utils.setLocalStorage('systemTheme', value)
      this.changeSystemTheme()
      this.systemThemeListener()
    }
  }
})
