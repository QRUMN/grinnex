import { createRouter, createWebHistory } from 'vue-router';
import Onboarding from '../views/Onboarding.vue';
import Login from '../views/auth/Login.vue';
import BusinessOnboarding from '../views/auth/BusinessOnboarding.vue';
import CreateAccount from '../views/auth/CreateAccount.vue';
import AdminLogin from '../views/admin/AdminLogin.vue';
import AdminDashboard from '../views/admin/AdminDashboard.vue';

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/auth/create-account',
    name: 'CreateAccount',
    component: CreateAccount,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/onboarding',
    name: 'Onboarding',
    component: Onboarding,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/auth/business-onboarding',
    name: 'BusinessOnboarding',
    component: BusinessOnboarding,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: AdminLogin,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/admin/dashboard',
    name: 'AdminDashboard',
    component: AdminDashboard,
    meta: {
      requiresAuth: true,
      requiresAdmin: true
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: {
      requiresAuth: true
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
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);
  const isAuthenticated = localStorage.getItem('token');
  const isAdmin = localStorage.getItem('adminToken');

  if (requiresAdmin && !isAdmin) {
    next('/admin/login');
  } else if (requiresAuth && !isAuthenticated && !isAdmin) {
    next('/login');
  } else if ((to.path === '/login' && isAuthenticated) || (to.path === '/admin/login' && isAdmin)) {
    next('/dashboard');
  } else {
    next();
  }
});

export default router;
