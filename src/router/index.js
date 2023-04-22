import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import Confirm from '../views/Confirm.vue';
import Schedule from '../views/Schedule.vue';
import Results from '../views/Results.vue';
import Resources from '../views/Resources.vue';
import HomeLayout from '../components/HomeLayout.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/',
      component: HomeLayout,
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'register',
          component: Register
        },
        {
          path: 'confirm',
          component: Confirm
        },
        {
          path: 'schedule',
          component: Schedule
        },
        {
          path: 'results',
          component: Results
        },
        {
          path: 'resources',
          component: Resources
        }
      ]
    }
  ]
})

export default router
