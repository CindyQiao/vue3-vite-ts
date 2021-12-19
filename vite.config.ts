import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: { //解决"Network: use `--host` to expose", 配置之后即可通过ip访问
    host: '0.0.0.0',
    port: 8080,
    open: true //自动打开
  },
  resolve:{
    alias:[
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  }
})
