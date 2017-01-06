// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

import '!script!jquery/dist/jquery.min.js'
import '!script!semantic-ui-css/semantic.min.js'
import '!style!css!semantic-ui-css/semantic.min.css'

firebase.initializeApp({
  apiKey: 'AIzaSyDV2eduUYm18U4LHxWjUXaKyen55Da7Bmo',
  authDomain: 'twitty-2ef61.firebaseapp.com',
  databaseURL: 'https://twitty-2ef61.firebaseio.com',
  storageBucket: 'twitty-2ef61.appspot.com',
  messagingSenderId: '270146394898'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})
