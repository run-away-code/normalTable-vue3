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
  build: {
    outDir: 'vite',
  },
})
