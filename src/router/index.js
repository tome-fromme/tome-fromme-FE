import { createRouter, createWebHistory } from 'vue-router'

import Admin from '@/pages/admin.vue'
import Faq from '@/pages/faq.vue'
import Home from '@/pages/home.vue'
import Login from '@/pages/login.vue'
import MyPage from '@/pages/mypage.vue'
import Write from '@/pages/write.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/myPage',
      name: 'MyPage',
      component: MyPage,
    },
    {
      path: '/write',
      name: 'Write',
      component: Write,
    },
  ],
})

export default router
