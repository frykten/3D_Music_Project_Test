<template lang="html">
	<div>
		<div class="line">
			<p>Master Volume: {{volumeToShow}}</p>
			<input type="range" min="0" max="100" v-model="volumeToShow">
		</div>
	</div>
</template>

<script>
var soundApi = require("./PlayApi.js")

export default {
  data() {
		return {
      volumeToShow: this.$store.getters.volume
 		}
	},
  computed: {
    volume: function() {
      return this.volumeToShow / 100;
    }
  },
  watch: {
    volumeToShow: function() {
      this.$store.commit('setVolume', this.volume);
    },
    volume: function() {
      soundApi.setVolume(this.volume)
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
