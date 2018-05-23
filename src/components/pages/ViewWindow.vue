<template lang="html">
  <div>
    <view-infos :instrument="instrument"></view-infos>
  </div>
</template>

<script>
import ViewInfos from './../fixed/ViewInfos.vue'

export default {
	components: {
		ViewInfos
	},
	data() {
		return {
		}
	},
	props: ["instrument"],
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
