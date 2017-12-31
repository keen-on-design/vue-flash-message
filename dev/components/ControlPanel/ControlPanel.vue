<template>
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
      <label class="cpanel__label" for="config__delay">Autoclose delay</label>
      <input v-model="delay" id="config__delay"/>
    </div>
    <button v-on:click="clickButton">flash it babe</button>
  </section>
</template>

<script>
export default {
  name: 'control-panel',

  data() {
    return {
      messageType: 'error',
      delay: 0,
    };
  },

  methods: {
    clickButton() {
      const flashMessage = this.flash('random modal', this.messageType, {
        timeout: this.delay,
        beforeDestroy() {
          console.log('destroy');
        },
      });
      flashMessage.message = `id: ${flashMessage.id}.<br> ${flashMessage.message}`;
    }
  }
};
</script>

<style scoped src="./ControlPanel.css">
</style>
