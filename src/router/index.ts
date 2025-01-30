import { createRouter, createWebHistory } from 'vue-router';
import Onboarding from '../views/Onboarding.vue';

const routes = [
  {
    path: '/',
    redirect: '/onboarding'
  },
  {
    path: '/onboarding',
    name: 'Onboarding',
    component: Onboarding,
    meta: {
      requiresAuth: false
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Navigation guard
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = localStorage.getItem('token'); // You might want to use a more sophisticated auth check

  if (requiresAuth && !isAuthenticated) {
    next('/onboarding');
  } else {
    next();
  }
});

export default router;
