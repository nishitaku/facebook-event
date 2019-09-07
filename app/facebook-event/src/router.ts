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

export default new Router({
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
