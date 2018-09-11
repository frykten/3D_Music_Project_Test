<template lang="html">
  <div>
    <play-panel></play-panel>
  </div>
</template>

<script>
import PlayPanel from './../fixed/PlayPanel.vue'

export default {
  data() {
    return {
    }
  },
  components: {
    PlayPanel,
  },
  destroyed() {
    window.hasKeyboard = false;
  },
}
</script>

<style lang="scss" scoped>
#canvas {
    width: 100%;
    height: 88vh;
}

.canvas {
    cursor: default;
}

#canvas:focus {
    outline: none !important;
}
</style>
