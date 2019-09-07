import firebase from 'firebase';
import Vue from 'vue';
import Router from 'vue-router';

import Main from './Main.vue';
import About from './views/About.vue';
import Count from './views/Count.vue';
import Form from './views/Form.vue';
import Home from './views/Home.vue';
import SignIn from './views/SignIn.vue';
import SignUp from './views/SignUp.vue';

Vue.use(Router);

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/',
      name: 'Main',
      component: Main,
      meta: { requiresAuth: true },
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: About
        },
        {
          path: '/count',
          name: 'count',
          component: Count
        },
        {
          path: '/form',
          name: 'form',
          component: Form
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth) {
    // このルートはログインされているかどうか認証が必要です。
    // もしされていないならば、ログインページにリダイレクトします。
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        next();
      } else {
        next({
          path: 'signin',
          query: { redirect: to.fullPath }
        });
      }
    });
  } else {
    next();
  }
});

export default router;
