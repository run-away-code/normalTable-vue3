import Home from './views/table.vue'
import Form from './views/form.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/page2',
    name: 'page2',
    component: () => import('./views/page2.vue')
  }
]

export default routes
