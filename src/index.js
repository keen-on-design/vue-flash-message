import guid from 'util-guid';
import FlashMessageComponent from './FlashMessageComponent';

require('./FlashMessage.css');

export default {
  install(Vue, config) {
    const options = config || {};
    const FlashBus = new Vue({
      data() {
        return {
          storage: {
          },
        };
      },
    });
    options.method = options.method || 'flash';
    options.storage = options.storage || '$flashStorage';

    Vue.mixin({
      methods: {
        [options.method](msg, type, opts) {
          const storage = {};
          const uniqueId = guid(16);
          const flashMessage = {
            id: uniqueId,
            message: msg,
            type: type || 'info',
            options: opts || {},
          };
          Object.assign(storage, FlashBus.storage);
          storage[uniqueId] = flashMessage;
          FlashBus.storage = storage;
          FlashBus.$emit('flash', flashMessage, msg, opts);
          return flashMessage;
        },
      },
    });
    Vue.prototype[options.storage] = FlashBus;
    Vue.component(options.name || 'flash-message', FlashMessageComponent(options, FlashBus));
  },
};

export { FlashMessageComponent };
