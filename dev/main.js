// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import App from './App';
import VueFlashMessage from '../src';
import store from './store';

require('../src/FlashMessage.css');

Vue.config.productionTip = false;
Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 3000,
  },
});


/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  template: '<App/>',
  components: {
    App,
  },
});
