import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAOYrSqLdZoWp6Zsl08w7OA3kR75POrX6I",
  authDomain: "my-address-pj-1b54c.firebaseapp.com",
  projectId: "my-address-pj-1b54c",
  storageBucket: "my-address-pj-1b54c.appspot.com",
  messagingSenderId: "317058410746",
  appId: "1:317058410746:web:d41aa80224d7cae11e8143",
  measurementId: "G-WJD04Z4333"
};
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
