import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// 引入Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
app.use(ElementPlus)

// 引入全局状态管理器pinia
import { createPinia } from 'pinia'
import { useAppStore } from '@/stores/counter.ts'
app.use(createPinia())
const appStore = useAppStore()
app.config.globalProperties.$global = appStore;

// 引入路由
import router from './router'
app.use(router)
app.mount('#app')
