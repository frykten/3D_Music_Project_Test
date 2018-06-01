<template lang="html">
	<div id="main">
		<router-link to="/view" v-if="this.$route.path !== '/view'">
	 		<h2 class="view">View</h2>
		</router-link>
		
		<router-link to="/play" v-else>
	 		<h2 class="play">Play</h2>
		</router-link>
	</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
	#main {
		align-items: center;
		background: hsl(200, 50%, 37%);
		border: solid 3px rgba(221, 221, 221, 0.75);
		border-radius: 3px;
		box-shadow: 5px 0px 10px rgba(10,20,20,0.4), 0 5px 10px rgba(10,15,15,0.6);
		display: flex;
		height: 4rem;
		justify-content: center;
		left: 2rem;
		position: fixed;
		top: 14vh;
		width: 4rem;
	}
	
	a, h2 {
		color: rgb(248, 248, 248);
		font-size: 1.25rem;
		font-weight: 700;
		text-decoration: none;
	}
</style>
