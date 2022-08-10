import { createApp, App as AppInstance } from 'vue'
import { createRouter, createWebHashHistory, RouterHistory, Router } from 'vue-router'
import App from './App.vue'
import routes from './router'
// import 'element-plus/es/components/message/style/css'


const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#vite-app')



