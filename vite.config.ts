import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//引入node提供内置模块path:可以获取绝对路径
import path from 'path';
export default defineConfig({
  plugins: [vue()],
  //src文件夹配置别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src')
    }
  },
  //配置代理跨域
  server: {
    // 跨域的代理中转服务器服务
    proxy: {
      '/api': {   // /vue代理target
        target: 'http://120.79.25.150:5783',      // 后端接口的根目录
        // secure: true,           // 如果是 https ,需要开启这个选项，http为false
        changeOrigin: true,        // 是否跨域
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
  }
})
