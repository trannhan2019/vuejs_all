import { createRouter, createWebHistory } from 'vue-router';
import authStore from '@/stores/auth';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },

    {
      path: '/dashboard',
      name: 'Dashboard',

      component: () => import('../views/Dashboard.vue'),
      async beforeEnter(to, from, next) {
        await authStore.dispatch('user');
        if (authStore.state.authStatus) {
          next();
        }
        next({
          name: 'Login',
        });
      },
    },

    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/auth/Login.vue'),
    },

    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/auth/Register.vue'),
    },
  ],
});

export default router;
