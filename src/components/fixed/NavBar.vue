<template lang="html">
	<nav id="nav-bar">
		<router-link to="/">
			<div class="logo parts"><img id="logo-img" src="/static/logos/jfg_logo.png" alt="">Great Fire's Jam Session</div>
		</router-link>

		<router-link to="/play">
			<div class="search parts">
				<div id="search-bar">
					<input type="text" id="search-input">
					<icon name="bars" id="search-menu"></icon>
				</div>
				<button id="search-submit">
					<icon name="search" id="search-icon"></icon>
				</button>
			</div>
		</router-link>

		<router-link to="/view">
			<div class="menus parts">
				<p>Menu</p>
				<icon name="bars"></icon>
				<icon name="circle"></icon>
				<icon name="circle" scale="2"></icon>
			</div>
		</router-link>
	</nav>
</template>

<script>
	export default {
	}
</script>

<style lang="scss" scoped>
	#nav-bar {
		align-items: center;
		background: linear-gradient(0deg, darkslategray, #172e2e 75%, black);
		box-shadow: 10px 0px 10px rgba(0,0,0,0.4), 0 10px 16px rgba(0,0,0,0.4);
		display: flex;
		height: 9vh;
		justify-content: space-between;
		padding: 0.5rem;
		position: fixed;
		width: 100vw;
		z-index: 100;
	}
	
	a {
		color: white;
		text-decoration: none;
	}
	
	.parts {
		align-items: center;
		display: flex;
		justify-content: space-around;
	}
	
	.logo {
		font-size: 1.5rem;
	}

	#logo-img {
		image-rendering: -moz-crisp-edges;
		image-rendering: -o-crisp-edges;
		image-rendering: -webkit-optimize-contrast;
		-ms-interpolation-mode: nearest-neighbor;
		image-rendering: pixelated;
		width: 2rem;
	}
	
	#search-bar {
		align-items: center;
		background: white;
		color: black;
		display: flex;
		height: 1.6rem;
		justify-content: center;
		width: 15rem;
	}
	
	#search-input {
		border: 0;
		font-size: 1rem;
		outline: 0;
		padding: 0 .5rem; 
		width: 13.5rem;
	}
	
	#search-menu {
		margin-left: auto;
		width: 1.6rem;
	}
	
	#search-submit {
		align-content: center;
		background: skyblue;
		border: 0;
		display: flex;
		height: 1.6rem;
		justify-content: center;
		width: 1.6rem;
	}
	
	.menus * {
		margin: .2rem;
	}
</style>
