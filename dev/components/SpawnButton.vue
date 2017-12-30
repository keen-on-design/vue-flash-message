<template>
  <section>
    <select v-model="messageType">
      <option selected>success</option>
      <option>error</option>
      <option>warning</option>
      <option>info</option>
    </select>
    <span>Selected: {{ messageType }}</span>
    <hr/>
    <button v-on:click="clickButton">flash it babe</button>
  </section>
</template>

<script>
export default {
  name: 'spawn-button',
  data() {
    return {
      messageType: 'error',
    };
  },

  methods: {
    clickButton() {
      this.flash('random modal', this.messageType, {
        timeout: 3000,
      });
    }
  }
};
</script>
