import { createRouter, createWebHistory } from 'vue-router'
import ChecklistView from '../views/ChecklistView.vue'
import HomeView from '../views/HomeView.vue'
import Day1View from '../views/Day1View.vue'
import WelcomeView from '../views/WelcomeView.vue'
import Day2View from '../views/Day2View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/checklist',
      name: 'checklist',
      component: ChecklistView,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'home' },
    },
    {
      path: '/day-one',
      name: 'day-one',
      component: Day1View,
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: WelcomeView,
    },
    {
      path: '/day-two',
      name: 'day2',
      component: Day2View,
    },
  ],
})

export default router
