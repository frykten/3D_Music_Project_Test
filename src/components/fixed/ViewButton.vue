<template lang="html">
	<div id="main">
		<router-link to="/play"  v-if="this.$route.path !== '/play'">
	 		<h2 class="play">Play</h2>
		</router-link>
		
		<router-link to="/view" v-else>
	 		<h2 class="view">View</h2>
		</router-link>
	</div>
</template>

<script>
export default {
	methods: {
		console() {
			console.log(this);
		}
	},
	mounted() {
		console.log(this.$route.path);
		console.log(this);
//		this.console();
	}
}
</script>

<style lang="scss" scoped>
	#main {
		align-items: center;
		background: hsl(182, 68%, 13%);
		border: solid 3px #90864f;
		border-radius: 50%;
		box-shadow: 5px 0px 10px rgba(10,20,20,0.4), 0 5px 10px rgba(10,15,15,0.6);
		display: flex;
		height: 3rem;
		justify-content: center;
		left: 1.5vw;
		position: fixed;
		top: 12vh;
		width: 3rem;
	}
	
	a, h2 {
		color: white;
		font-size: 1rem;
		font-weight: 700;
		text-decoration: none;
	}
</style>
