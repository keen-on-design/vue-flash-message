import guid from 'util-guid';
import FlashMessageComponent from './FlashMessageComponent';

require('./FlashMessage.css');

function flashMessageFabric(messageId, messageContent, messageType, Bus, messageOptions) {
  return {
    id: messageId,
    message: messageContent,
    type: messageType || 'info',
    options: messageOptions || {},
    storage: Bus.storage,

    destroy() {
      delete Bus.storage[messageId];
    },

    getStorage() {
      return Bus;
    },
  };
}

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
          const flashMessage = flashMessageFabric(uniqueId, msg, type, FlashBus, opts);
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
