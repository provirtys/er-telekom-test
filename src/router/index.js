import { createWebHistory, createRouter } from 'vue-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useAlertStore } from '@store/alert/alert';
import { useAuthStore } from '../store/auth/auth';
import { storeToRefs } from 'pinia';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/home/home.vue'),
    meta: {
      authRequired: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../pages/register/register.vue'),
    meta: {
      layout: 'auth'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/login/login.vue'),
    meta: {
      layout: 'auth'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: async () => await import('@pages/404/404.vue')
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        const { currentUser } = storeToRefs(useAuthStore());
        currentUser.value = user;
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, _, next) => {
  const user = await getCurrentUser();
  if (to.meta.authRequired) {
    if (user) {
      next();
    } else {
      const { createAlert } = useAlertStore();
      createAlert({ title: 'Внимание!', text: 'Войдите в систему', type: 'warning' });
      next('/login');
    }
  } else if (to.meta.layout === 'auth' && user) {
    next({ name: 'home' });
  } else {
    next();
  }
});
