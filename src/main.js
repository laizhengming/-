import { createApp } from 'vue'
import App from './App.vue'
//默认样式清除
import '@/index.css'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
