<template>
  <button v-on:click="clickButton">flash it babe</button>
</template>

<script>
export default {
  name: 'spawn-button',
  methods: {
    clickButton() {
      this.flash('random modal', 'error', {
        timeout: 3000,
      });
    }
  }
};
</script>
