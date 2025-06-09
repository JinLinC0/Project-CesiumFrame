import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Project-CesiumFrame/',
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
  },
  plugins: [vue()],
  resolve: {
    alias: {  // 配置路径别名
      '@': path.resolve(__dirname, 'src')  // 用@代表src文件夹
    }
  }
})
