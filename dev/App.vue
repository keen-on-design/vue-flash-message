<template>
  <div id="app">
    <flash-message transitionIn="animated swing"></flash-message>
    <spawn-button></spawn-button>
  </div>
</template>

<script>
import SpawnButton from './components/SpawnButton.vue';
export default {
  name: 'app',
  components: {
    SpawnButton
  },
};
</script>
