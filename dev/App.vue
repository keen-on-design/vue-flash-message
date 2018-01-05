<template>
  <div id="app">
    <flash-message
      transitionName="flash"
      transitionIn=" "
      transitionOut=" "
      class="flashpool"
    ></flash-message>
    <section class="cpanel">
      <div class="cpanel__group">
        <label class="cpanel__label" for="messageType">Flash message type</label>
        <select id="messageType" name="messageType" v-model="messageType">
          <option selected>success</option>
          <option>error</option>
          <option>warning</option>
          <option>info</option>
        </select>
      </div>

      <div class="cpanel__group">
        <label class="cpanel__label" for="messageContents">Message contents</label>
        <input type="text" id="messageContents" name="messageContents" v-model="messageContents"/>
        <span class="cpanel__hint">Plain text or html.</span>
      </div>

      <div class="cpanel__group">
        <label class="cpanel__label" for="config__delay">Autoclose delay</label>
        <input v-model="delay" id="config__delay"/>
        <span class="cpanel__hint">Delay in milliseconds. Set to 0 to disable.</span>
      </div>
      <button v-on:click="clickButton">flash it babe</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      messageType: 'success',
      messageContents: 'Hello world',
      delay: 0,
    };
  },

  methods: {
    clickButton() {
      const flashMessage = this.flash(this.messageContents, this.messageType, {
        timeout: this.delay,
      });
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

.flashpool {
  box-sizing: border-box;
  position: fixed;
  top: 20px;
  right: 20px;
  max-height: 400px;
  width: 260px;
  perspective: 400px;
}

.flashpool .flash__message {
  width: 260px;
  transition: all 500ms;
  display: flex;
}

.flash-enter, .flash-leave-to {
  opacity: 0;
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
  padding: 80px 24px 0 24px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgb(235, 234, 234);
}

.cpanel__group {
  font-size: 13px;
  margin: 0 10px 31px 0;
}

.cpanel input {
  appearance: none;
  border: none;
  font-size: 18px;
  padding: 0 0 6px 0;
  border-bottom: 2px solid #ddd;
  width: 100%;
}

.cpanel input:focus {
  box-shadow: none;
  outline: none;
  border-bottom: 2px solid #47B784;
}

.cpanel button {
  width: 100%;
  appearance: none;
  border: 1px solid #47B784;
  color: #47B784;
  font-weight: normal;
  padding: 10px;
  border-radius: 3px;
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
