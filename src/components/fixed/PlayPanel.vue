<template lang="html">
	<div>
		<section class="play-panel" v-if="isLoaded">
			<h2 class="play-title">Play</h2>

			<section id="instrument">
				<button class="btn keys" @click="changeView()"><img class="btn-img" src="/static/logos/piano_keys.png" alt=""></button>
				<button class="btn fret" @click="changeView()"><img class="btn-img" src="/static/logos/guitar.svg" alt=""></button>
				<button class="btn keyboard" @click="changeView()"><icon name="keyboard"></icon></button>
			</section>
			
			<section class="components">
				<play-panel-play-keyboard></play-panel-play-keyboard>
<!--				<play-panel-fx></play-panel-fx>-->
			</section>

			<section id="modifiers">
				<button class="btn play" @click="changeView()"><icon name="play"></icon></button>
				<button class="btn fx" @click="changeView()"><p><b>FX</b></p></button>
			</section>

			<button id="play">Play</button>
		</section>

		<section class="play-panel" v-else>
			<h2 class="loading">Loading</h2>
			<icon name="cog" scale="3" class="cog" spin></icon>
			<button class="btn play" @click="init()">Play</button>
		</section>
	</div>
</template>

<script>
	import PlayPanelFx from './PlayPanelComponents/PlayPanelFx.vue'
	import PlayPanelPlayKeyboard from './PlayPanelComponents/PlayPanelPlayKeyboard.vue'
	
	export default {
		data() {
			return {
				isLoaded: true,
			}
		},
		components: {
			PlayPanelFx,
			PlayPanelPlayKeyboard,
		},
		methods: {
			changeView() {
				console.log("Change");
			}
		}
	}
</script>

<style lang="scss" scoped>
	.play-panel {
		align-items: center;
		background-color: rgba(211, 211, 211, 0.4);
		bottom: 3vh;
		display: flex;
		flex-direction: column;
		height: 88vh;
		justify-content: space-around;
		position: fixed;
		right: 0;
		width: 25rem;
	}
	
	.btn {
		align-items: center;
		display: flex;
		justify-content: center;
		height: 1.75rem;
		margin: 0 5px;
		width: 1.75rem;
	}
	
	.btn-img {
		width: 1.5rem;
	}
	
	#instrument {
		display: flex;
		flex-wrap: wrap;
		left: 16px;
		position: absolute;
		top: 16px;
	}
	
	#modifiers {
		display: flex;
		bottom: 16px;
		flex-wrap: wrap;
		left: 16px;
		position: absolute;
	}

	/*
	.cog {
		animation: spin 4000ms infinite linear;
	}

	@keyframes spin { 
		from { 
			transform: rotate(0deg); 
		} to { 
			transform: rotate(360deg); 
		}
	}
	*/
</style>