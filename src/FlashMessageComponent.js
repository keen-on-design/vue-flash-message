const defaultTemplate = `
<transition-group
  :name="transitionName"
  :class="outerClass"
  tag="div"
>
  <div
    v-for="(message, index) in storage"
    :key="index"
    :class="cssClasses(index) + ' flash__message'"
    role="alert"
    aria-live="polite"
    aria-atomic="true"
    @mouseover="onMouseOver(index)"
    @mouseleave="onMouseOut(index)"
  >
    <div class="flash__message-content" v-html="message.content"></div>
    <button v-if="!message.options.important"
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
  // <Array> custom css classes for template
  css = null,
} = {}, bus) {
  return {
    template,
    props: {
      transitionName: {
        type: String,
        default: 'flash-transition',
      },
      outerClass: {
        type: String,
        default: 'flash__wrapper',
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
    },
    methods: {
      cssClasses(id) {
        return this.getFlash(id).type;
      },
      getFlash(id) {
        return this.storage[id];
      },
      destroyFlash(id) {
        this.getFlash(id).destroy();
      },
      onMouseOver(id) {
        const flash = this.getFlash(id);
        if (typeof flash !== 'undefined') {
          flash.onStartInteract();
        }
      },
      onMouseOut(id) {
        const flash = this.getFlash(id);
        if (typeof flash !== 'undefined') {
          flash.onCompleteInteract();
        }
      },
    },
  };
}
