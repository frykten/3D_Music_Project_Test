<template lang="html">
	<div id="main">
		<section id="welcome-text">
			<h1 id="title">Great Fire's Jam Session</h1>
			<h3 id="tagline">The website where you stalk information and jam at the same time</h3>
			<p id="main-text">Ever wanted to buy a new musical instrument online but coudln't try it out? Ever wanted to jam at a music shop with the clerks and other customers? Here we got the solution...  <br>Catch 'em all!</p>
		</section>
	</div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
	#welcome-text {
		background: rgba(20,20,20,.4);
		display: flex;
		font-size: 1.5em;
		flex-direction: column;
		height: 60vh;
		justify-content: space-between;
		left: 10vw;
		padding: 2em;
		position: fixed;
		top: 20vh;
		width: 80vw;
	}
	
	#title {
		color: rgb(240,240,240);
		font-size: 2em;
	}
	
	#tagline {
		color: rgb(240,240,240);
		font-weight: normal;
	}
	
	#main-text {
		font-weight: normal;
	}
</style>
