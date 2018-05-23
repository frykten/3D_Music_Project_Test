<template lang="html">
  <div>
    <play-panel :instrument="instrument"></play-panel>
  </div>
</template>

<script>
import PlayPanel from './../fixed/PlayPanel.vue'

export default {
  data() {
    return {

    }
  },
  props: ["instrument"],
  components: {
    PlayPanel,

  }
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
