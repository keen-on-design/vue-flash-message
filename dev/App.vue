<template>
  <div id="app">
    <flash-message transitionIn="animated swing" class="flashpool"></flash-message>
    <control-panel></control-panel>
  </div>
</template>

<script>
import ControlPanel from './components/ControlPanel/ControlPanel.vue';
export default {
  name: 'app',
  components: {
    ControlPanel
  },
};
</script>

<style>
.flashpool {
  position: fixed;
  display: flex;
  flex-wrap: wrap-reverse;
  flex-direction: column;
  top: 20px;
  right: 20px;
  max-height: 400px;
}

.flashpool .flash__message {
  width: 260px;
  margin-left: 20px
}
</style>
