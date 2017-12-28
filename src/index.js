import FlashMessageComponent from './FlashMessageComponent';

require('./FlashMessage.css');

export default {
  install(Vue, config) {
    const options = config || {};
    const FlashBus = new Vue({
      data() {
        return {
          flashStorage: {
          },
        };
      },
    });
    options.method = options.method || 'flash';

    Vue.mixin({
      methods: {
        [options.method](msg, type, opts) {
          const storage = {};
          const id = Object.keys(FlashBus.flashStorage).length;
          Object.assign(storage, FlashBus.flashStorage);
          storage[id] = {
            message: msg,
            type: type || 'info',
            options: opts || {},
          };
          FlashBus.flashStorage = storage;
          FlashBus.$emit('flash', id, msg, opts);
        },
      },
    });
    Vue.prototype.$flashBus = FlashBus;

    Vue.component(options.name || 'flash-message', FlashMessageComponent(options, FlashBus));
  },
};

export { FlashMessageComponent };
