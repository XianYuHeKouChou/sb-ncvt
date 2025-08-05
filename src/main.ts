import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// 引入Element Plus styles
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

// 引入全局状态管理器pinia
import { createPinia } from 'pinia'
app.use(createPinia())

// 引入路由
import router from './router'
app.use(router)
app.mount('#app')

import './assets/main.css'
