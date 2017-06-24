// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import axios from 'axios'
import Toasted from 'vue-toasted';
import moment from 'moment'
import  '@/assets/styles.css'

window.axios = axios
Vue.use(Toasted)
Vue.config.productionTip = false
Vue.filter('formatDate', function(value) {
    if (value) {
        moment.locale('id')
        return moment(new Date(value)).format(' Do MMMM YYYY, h:mm:ss a')
    }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, store,
  template: '<App/>',
  components: { App }
})
