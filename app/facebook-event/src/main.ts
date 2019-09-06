import 'buefy/dist/buefy.css';

import Buefy from 'buefy';
import firebase from 'firebase';
import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store/store';

Vue.use(Buefy);
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
