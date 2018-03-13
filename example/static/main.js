webpackJsonp([1],{

/***/ "/wbf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('flash-message',{staticClass:"flashpool",attrs:{"transitionName":"flash"}}),_vm._v(" "),_c('section',{staticClass:"cpanel"},[_c('div',{staticClass:"cpanel__wrapper"},[_c('div',{staticClass:"cpanel__group"},[_c('label',{staticClass:"cpanel__label",attrs:{"for":"messageType"}},[_vm._v("Flash message type")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.messageType),expression:"messageType"}],attrs:{"id":"messageType","name":"messageType"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.messageType=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"selected":""}},[_vm._v("success")]),_vm._v(" "),_c('option',[_vm._v("error")]),_vm._v(" "),_c('option',[_vm._v("warning")]),_vm._v(" "),_c('option',[_vm._v("info")])]),_vm._v(" "),_c('span',{staticClass:"cpanel__hint"},[_vm._v("Flasm message preset class. You can use your own classes though.")])]),_vm._v(" "),_c('div',{staticClass:"cpanel__group"},[_c('label',{staticClass:"cpanel__label",attrs:{"for":"messageContents"}},[_vm._v("Message contents")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.messageContents),expression:"messageContents"}],staticClass:"cpanel__input",attrs:{"type":"text","id":"messageContents","name":"messageContents"},domProps:{"value":(_vm.messageContents)},on:{"input":function($event){if($event.target.composing){ return; }_vm.messageContents=$event.target.value}}}),_vm._v(" "),_c('span',{staticClass:"cpanel__hint"},[_vm._v("Plain text or html.")])]),_vm._v(" "),_c('div',{staticClass:"cpanel__group"},[_c('label',{staticClass:"cpanel__label",attrs:{"for":"config__delay"}},[_vm._v("Autoclose delay")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.delay),expression:"delay"}],staticClass:"cpanel__input",attrs:{"id":"config__delay"},domProps:{"value":(_vm.delay)},on:{"input":function($event){if($event.target.composing){ return; }_vm.delay=$event.target.value}}}),_vm._v(" "),_c('span',{staticClass:"cpanel__hint"},[_vm._v("Delay in milliseconds. Set to 0 to disable.")])]),_vm._v(" "),_c('div',{staticClass:"cpanel__group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.messageImportant),expression:"messageImportant"}],staticClass:"cpanel__checkbox",attrs:{"id":"config__important","type":"checkbox"},domProps:{"checked":Array.isArray(_vm.messageImportant)?_vm._i(_vm.messageImportant,null)>-1:(_vm.messageImportant)},on:{"change":function($event){var $$a=_vm.messageImportant,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.messageImportant=$$a.concat([$$v]))}else{$$i>-1&&(_vm.messageImportant=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.messageImportant=$$c}}}}),_vm._v(" "),_c('span',[_vm._v("important")]),_vm._v(" "),_c('span',{staticClass:"cpanel__hint"},[_vm._v("Set to true to remove close control.")])]),_vm._v(" "),_c('button',{on:{"click":_vm.clickButton}},[_vm._v("Spawn flash message")]),_vm._v(" "),_c('button',{staticClass:"cpanel__reset",on:{"click":_vm.emitVuex}},[_vm._v("Spawn from Vuex")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('button',{staticClass:"cpanel__reset",on:{"click":_vm.clickResetButton}},[_vm._v("Clear all")])]),_vm._v(" "),_vm._m(0)])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cpanel__donate"},[_c('a',{attrs:{"href":"https://ko-fi.com/V7V27B99","target":"_blank"}},[_c('img',{staticStyle:{"border":"0px","height":"36px"},attrs:{"height":"36","src":"https://az743702.vo.msecnd.net/cdn/kofi3.png?v=0","border":"0","alt":"Buy Me a Coffee at ko-fi.com"}})])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("a/HC");


/***/ }),

/***/ "35fo":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "EOX5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("Q6PX");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_08128f22_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("/wbf");
function injectStyle (ssrContext) {
  __webpack_require__("LihI")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_08128f22_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "LihI":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Q6PX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__("tBJI");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app',
  data: function data() {
    return {
      messageType: 'success',
      messageContents: 'Hello world',
      messageImportant: false,
      delay: 0
    };
  },


  methods: {
    clickButton: function clickButton() {
      var flashMessage = this.flash(this.messageContents, this.messageType, {
        timeout: this.delay,
        important: this.messageImportant
      });
    },
    clickResetButton: function clickResetButton() {
      var store = this.flash();
      console.log(store.destroyAll());
    },
    emitVuex: function emitVuex() {
      __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].dispatch('sampleAction');
    }
  },

  created: function created() {
    var greetings = this.flash('Hi there, pal. Vue-flash-message is made to be <strong>simple and compact yet flexible</strong>. I hope you enjoy it :3', 'info', {
      timeout: 0,
      important: true
    });
  }
});

/***/ }),

/***/ "a/HC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("EOX5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src__ = __webpack_require__("lVK7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__("tBJI");
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.






__webpack_require__("35fo");

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_2__src__["a" /* default */], {
  messageOptions: {
    timeout: 3000,
  },
});


/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  store: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */],
  el: '#app',
  template: '<App/>',
  components: {
    App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */],
  },
});


/***/ }),

/***/ "lVK7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__("bOdI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__("woOf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("Zrlr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__("wxAW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uuid_v4__ = __webpack_require__("DtRx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uuid_v4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_uuid_v4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_timers__ = __webpack_require__("162o");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_timers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_timers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__FlashMessageComponent__ = __webpack_require__("xq+K");
/* unused harmony reexport FlashMessageComponent */








__webpack_require__("35fo");

function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

var FlashMessage = function () {
  function FlashMessage(Bus, messageContent, messageType, messageOptions, globalDefaults) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, FlashMessage);

    var config = {
      autoEmit: true,
      important: false,
      pauseOnInteract: false,
      timeout: 0,

      // callbacks
      beforeDestroy: null,
      onStartInteract: null,
      onCompleteInteract: null
    };
    this.storage = Bus;
    this.content = messageContent;
    this.options = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(config, globalDefaults, messageOptions);
    this.type = messageType;
    this.id = __WEBPACK_IMPORTED_MODULE_4_uuid_v4___default()();
    this.timer = null;

    if (this.options.autoEmit) {
      this.emit();
    }
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(FlashMessage, [{
    key: 'emit',
    value: function emit() {
      this.storage.push(this.id, this);
      this.startSelfDestructTimer();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.killSelfDestructTimer();
      this.beforeDestroy();
      this.storage.destroy(this.id);
    }
  }, {
    key: 'setSelfDestructTimeout',
    value: function setSelfDestructTimeout(timeout) {
      this.options.timeout = timeout;
    }
  }, {
    key: 'startSelfDestructTimer',
    value: function startSelfDestructTimer() {
      var _this = this;

      if (this.options.timeout > 0) {
        Object(__WEBPACK_IMPORTED_MODULE_5_timers__["setTimeout"])(function () {
          _this.destroy();
        }, this.options.timeout);
      }
    }
  }, {
    key: 'killSelfDestructTimer',
    value: function killSelfDestructTimer() {
      Object(__WEBPACK_IMPORTED_MODULE_5_timers__["clearTimeout"])(this.timer);
    }
  }, {
    key: 'beforeDestroy',
    value: function beforeDestroy() {
      if (isFunction(this.options.beforeDestroy)) {
        this.options.beforeDestroy();
      }
    }
  }, {
    key: 'onStartInteract',
    value: function onStartInteract() {
      if (this.options.pauseOnInteract) {
        this.killSelfDestructTimer();
      }
      if (isFunction(this.options.onStartInteract)) {
        this.options.onStartInteract();
      }
    }
  }, {
    key: 'onCompleteInteract',
    value: function onCompleteInteract() {
      if (this.options.pauseOnInteract) {
        this.startSelfDestructTimer();
      }
      if (isFunction(this.options.onCompleteInteract)) {
        this.options.onCompleteInteract();
      }
    }
  }]);

  return FlashMessage;
}();

/* harmony default export */ __webpack_exports__["a"] = ({
  install: function install(Vue, config) {
    var options = config || {};
    var FlashBus = new Vue({
      data: function data() {
        return {
          storage: {}
        };
      },

      methods: {
        flash: function flash(msg, type, opts) {
          return new FlashMessage(FlashBus, msg, type, opts);
        },
        push: function push(id, message) {
          Vue.set(this.storage, id, message);
        },
        destroy: function destroy(id) {
          Vue.delete(this.storage, id);
        },
        destroyAll: function destroyAll() {
          Vue.set(this, 'storage', {});
        }
      }
    });
    options.method = options.method || 'flash';
    options.storage = options.storage || '$flashStorage';

    Vue.mixin({
      methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, options.method, function (msg, type, opts) {
        if (arguments.length > 0) {
          return new FlashMessage(FlashBus, msg, type, opts, options.messageOptions);
        }
        return FlashBus;
      })
    });

    Vue.prototype[options.storage] = FlashBus;

    Vue.component(options.name || 'flash-message', Object(__WEBPACK_IMPORTED_MODULE_6__FlashMessageComponent__["a" /* default */])(options, FlashBus));
  }
});



/***/ }),

/***/ "tBJI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("NYxO");



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  state: {
  },
  actions: {
    sampleAction() {
      __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].prototype.$flashStorage.flash('Hellow from Vuex action!', 'success', {
        timeout: 0,
      });
    },
  },
}));


/***/ }),

/***/ "xq+K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("woOf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);

var defaultTemplate = '\n<transition-group\n  :name="transitionName"\n  :class="outerClass"\n  tag="div"\n>\n  <div\n    v-for="(message, index) in storage"\n    :key="index"\n    :class="cssClasses(index) + \' flash__message\'"\n    role="alert"\n    aria-live="polite"\n    aria-atomic="true"\n    @mouseover="onMouseOver(index)"\n    @mouseleave="onMouseOut(index)"\n  >\n    <div class="flash__message-content" v-html="message.content"></div>\n    <button v-if="!message.options.important"\n      type="button"\n      class="flash__close-button"\n      data-dismiss="alert"\n      aria-label="alertClose"\n      @click.stop.prevent="destroyFlash(index)"\n    >\n      <span aria-hidden="true">&times;</span>\n    </button>\n  </div>\n</transition-group>\n';

/* harmony default export */ __webpack_exports__["a"] = (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$duration = _ref.duration,
      duration = _ref$duration === undefined ? 3000 : _ref$duration,
      _ref$template = _ref.template,
      template = _ref$template === undefined ? defaultTemplate : _ref$template,
      _ref$css = _ref.css,
      css = _ref$css === undefined ? null : _ref$css;

  var bus = arguments[1];

  return {
    template: template,
    props: {
      transitionName: {
        type: String,
        default: 'flash-transition'
      },
      outerClass: {
        type: String,
        default: 'flash__wrapper'
      }
    },
    data: function data() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({
        message: null,
        closed: false,
        _timeout: null
      }, { duration: duration, css: css });
    },

    computed: {
      storage: function storage() {
        return bus.storage;
      }
    },
    methods: {
      cssClasses: function cssClasses(id) {
        return this.getFlash(id).type;
      },
      getFlash: function getFlash(id) {
        return this.storage[id];
      },
      destroyFlash: function destroyFlash(id) {
        this.getFlash(id).destroy();
      },
      onMouseOver: function onMouseOver(id) {
        this.getFlash(id).onStartInteract();
      },
      onMouseOut: function onMouseOut(id) {
        this.getFlash(id).onCompleteInteract();
      }
    }
  };
});

/***/ })

},[0]);