import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  actions: {
    sampleAction() {
      Vue.prototype.$flashStorage.flash('Hellow from Vuex action!', 'success', {
        timeout: 0,
      });
    },
  },
});
