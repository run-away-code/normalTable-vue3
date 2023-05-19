import { defineConfig } from 'vite'
import * as path from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({ // 按需引入
      resolvers: [ElementPlusResolver()],
    }),
    Components({ // 按需引入
      resolvers: [ElementPlusResolver()],
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  server: {
    port: 3060,
    open: false,
    host: '0.0.0.0'
  },
  base: `${process.env.NODE_ENV === 'production' ? '' : ''}`,
  // input: './src/components/index.js',
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/components/index.js'), // 设置入口文件
      name: 'Normaltable-Vue3', // 起个名字，安装、引入用
      fileName: 'Normaltable-Vue3' // 打包后的文件名
    },
    // sourcemap: true, // 输出.map文件
    outDir: 'dist',
  },
})
