import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { store, key } from './store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//引入图标组件
import * as Icons from '@element-plus/icons-vue'
const app = createApp(App)

app.use(router).use(store, key).use(ElementPlus).mount('#app')

//全局注册组件



Object.keys(Icons).forEach((key)=>{
    app.component(key, Icons[key])
})