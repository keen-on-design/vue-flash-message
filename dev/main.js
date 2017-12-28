// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueFlashMessage from '../src';

require('../src/FlashMessage.css');

Vue.config.productionTip = false;
Vue.use(VueFlashMessage);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App,
  },
});
