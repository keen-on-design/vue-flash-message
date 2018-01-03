import Vue from 'vue';

function isFunction(functionToCheck) {
  const getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

const defaultTemplate = `
<transition-group
  :name="transitionName"
  :enter-active-class="transitionIn"
  :leave-active-class="transitionOut"
  mode="out-in"
  tag="div"
  class="flash__wrapper"
>
  <div
    v-for="(message, index) in storage"
    :key="index"
    :class="cssClasses(index) + ' flash__message'"
    role="alert"
    aria-live="polite"
    aria-atomic="true"
  >
    <div class="flash__message-content" v-html="message.message"></div>
    <button v-if="!message.important"
      type="button"
      class="flash__close-button"
      data-dismiss="alert"
      aria-label="alertClose"
      @click.stop.prevent="destroyFlash(index)"
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</transition-group>
`;

export default function ({
    // <Number> duration of auto close flash message (in milliseconds)
    duration = 3000,
    // <String> template to use display flash
    template = defaultTemplate,
    // <Boolean> if false then clear persisted storage every time
    keep = true,
    // <Array> custom css classes for template
    css = null,
  } = {}, bus,
) {
  return {
    template,
    props: {
      transitionName: {
        type: String,
        default: 'custom-classes-transition',
      },
      transitionIn: {
        type: String,
        default: 'animated fadeInDown',
      },
      transitionOut: {
        type: String,
        default: 'animated fadeOutUp',
      },
    },
    data() {
      return Object.assign({
        message: null,
        closed: false,
        _timeout: null,
      }, { duration, css });
    },
    computed: {
      storage() {
        return bus.storage;
      },
      show() {
        return !this.closed;
      },
    },
    methods: {
      cssClasses(id) {
        return this.getFlash(id).type;
      },
      getFlash(id) {
        return this.storage[id];
      },

      destroyFlash(id) {
        const flashObject = this.getFlash(id);
        if (isFunction(flashObject.options.beforeDestroy)) {
          flashObject.options.beforeDestroy();
        }
        Vue.delete(this.storage, id);
      },

      destroyFlashAfterTimeout(id, timeout) {
        const flash = bus.storage[id];
        flash.timer = window.setTimeout(() => {
          this.destroyFlash(id);
        }, timeout);
      },
    },
    created() {
      bus.$on('flash', (flash, msg, config) => {
        if (config.timeout > 0) {
          this.destroyFlashAfterTimeout(flash.id, config.timeout);
        }
      });
    },
    watch: {
      storage: {
        handler() {
        },
        deep: true,
      },
    },
  };
}
