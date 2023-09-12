import { createRouter, createWebHistory } from 'vue-router'
import Page1View from '../views/Page1View.vue'
import Page2View from '../views/Page2View.vue'
import Page3View from '../views/Page3View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Page1',
      name: 'Page1',
      component: Page1View
    },
    {
      path: '/Page2',
      name: 'Page2',
      component: Page2View
    },
    {
      path: '/Page3',
      name: 'Page3',
      component: Page3View
    }
  ]
})

export default router
