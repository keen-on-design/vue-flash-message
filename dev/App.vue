<template>
  <div id="app">
    <flash-message
      transitionName="flash"
      class="flashpool"
    ></flash-message>
    <section class="cpanel">
      <div class="cpanel__wrapper">
        <div class="cpanel__group">
          <label class="cpanel__label" for="messageType">Flash message type</label>
          <select id="messageType" name="messageType" v-model="messageType">
            <option selected>success</option>
            <option>error</option>
            <option>warning</option>
            <option>info</option>
          </select>
          <span class="cpanel__hint">Flasm message preset class. You can use your own classes though.</span>
        </div>

        <div class="cpanel__group">
          <label class="cpanel__label" for="messageContents">Message contents</label>
          <input class="cpanel__input" type="text" id="messageContents" name="messageContents" v-model="messageContents"/>
          <span class="cpanel__hint">Plain text or html.</span>
        </div>

        <div class="cpanel__group">
          <label class="cpanel__label" for="config__delay">Autoclose delay</label>
          <input class="cpanel__input" v-model="delay" id="config__delay"/>
          <span class="cpanel__hint">Delay in milliseconds. Set to 0 to disable.</span>
        </div>

        <div class="cpanel__group">
          <input class="cpanel__checkbox" v-model="messageImportant" id="config__important" type="checkbox"/>
          <span>important</span>
          <span class="cpanel__hint">Set to true to remove close control.</span>
        </div>
        <button v-on:click="clickButton">Spawn flash message</button>
        <button class="cpanel__reset" v-on:click="emitVuex">Spawn from Vuex</button>
        <br>
        <button class="cpanel__reset" v-on:click="clickResetButton">Clear all</button>
      </div>
      <div class="cpanel__donate">
        <a href='https://ko-fi.com/V7V27B99' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://az743702.vo.msecnd.net/cdn/kofi3.png?v=0' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
      </div>
    </section>
  </div>
</template>

<script>
import store from './store';

export default {
  name: 'app',
  data() {
    return {
      messageType: 'success',
      messageContents: 'Hello world',
      messageImportant: false,
      delay: 0,
    };
  },

  methods: {
    clickButton() {
      const flashMessage = this.flash(this.messageContents, this.messageType, {
        timeout: this.delay,
        important: this.messageImportant,
      });
    },
    clickResetButton() {
      const store = this.flash();
      console.log(store.destroyAll());
    },
    emitVuex() {
      store.dispatch('sampleAction');
    }
  },

  created() {
    const greetings = this.flash('Hi there, pal. Vue-flash-message is made to be <strong>simple and compact yet flexible</strong>. I hope you enjoy it :3', 'info', {
      timeout: 0,
      important: true,
    });
  }
};
</script>

<style>
* {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

.flashpool {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  position: fixed;
  top: 20px;
  right: 20px;
  max-height: 400px;
  width: 260px;
  -webkit-perspective: 400px;
          perspective: 400px;
}

.flashpool .flash__message {
  width: 260px;
  -webkit-transition: all 500ms;
  -o-transition: all 500ms;
  transition: all 500ms;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-family: 'Oxygen', sans-serif;
  font-size: 13px;
  line-height: 130%;
}

.flash-enter, .flash-leave-to {
  opacity: 0;
  -webkit-transform: rotateX(-30deg) scale(.88) translateY(-30px);
          transform: rotateX(-30deg) scale(.88) translateY(-30px);
}

.flash-leave-active {
  position: absolute;
}

.cpanel {
  font-family: 'Oxygen', sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  padding: 40px 24px 0 24px;
  overflow: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  border-right: 1px solid rgb(235, 234, 234);
}

.cpanel__wrapper {
  height: 100%;
  padding-bottom: 24px;
}

.cpanel__donate {
  -ms-flex-negative: 0;
      flex-shrink: 0;
  padding-bottom: 24px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  opacity: .3;
}

.cpanel__donate:hover {
  opacity: 1;
}

.cpanel__group {
  font-size: 13px;
  margin: 0 10px 31px 0;
}

.cpanel__input {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border: none;
  font-size: 18px;
  padding: 0 0 6px 0;
  border-bottom: 2px solid #ddd;
  width: 100%;
}

.cpanel__checkbox {
  margin-right: 3px;
  margin-bottom: 5px;
}

.cpanel input:focus {
  -webkit-box-shadow: none;
          box-shadow: none;
  outline: none;
  border-bottom: 2px solid #47B784;
}

.cpanel button {
  width: 100%;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border: 1px solid #47B784;
  color: #47B784;
  font-weight: normal;
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;
}

.cpanel button:focus, .cpanel button:active {
  outline: none;
}

.cpanel button:active {
  background-color: rgb(225, 241, 234);
}

.cpanel button.cpanel__reset {
  width: 100%;
  border-color: transparent;
  font-size: 13px;
  color: #47B784;
  padding: 0;
  margin-top: 16px;
  border-radius: 0;
  cursor: pointer;
}

.cpanel__label, .cpanel__hint {
  display: block;
  margin-bottom: 5px;
  color: #7f8c8d;
  font-size: 0.85em;
}

.cpanel__label {
  cursor: pointer;
}

.cpanel__hint {
  margin-top: 5px;
  font-style: italic;
  color: #a1abac;
}
</style>
