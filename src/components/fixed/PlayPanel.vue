<template lang="html">
	<div>
		<section class="play-panel" v-if="isLoaded">
            <play-panel-fx v-if="!isPlaying"></play-panel-fx>
            
            <section v-else>
                <h2 class="play-title">Play</h2>
                
                <div>
                    <select name="instr" id="instr" v-model="instrument">
                        <option value="pure_mini_sp">pure_mini_sp</option>
                        <option value="SolarTech_Mini_SP">SolarTech_Mini_SP</option>
                        <option value="Stratocaster_HSS">Stratocaster HSS</option>
                    </select>
                </div>

                <section id="readers">
                    <button class="btn piano" @click="changePanel('piano')"><img class="btn-img" src="/static/logos/piano_keys.png" alt=""></button>
                    <button class="btn fret" @click="changePanel('g-fret')"><img class="btn-img" src="/static/logos/guitar.svg" alt=""></button>
                    <button class="btn keyboard" @click="changePanel('keyboard')"><icon name="keyboard"></icon></button>
                </section>

                <div id="play-style">
                        <play-panel-play-keyboard v-if="panel == 'keyboard'" :child-instr="instrument"></play-panel-play-keyboard>
                        <play-panel-play-piano v-if="panel == 'piano'" :child-instr="instrument"></play-panel-play-piano>
                        <play-panel-play-guitar v-if="panel == 'g-fret'" :child-instr="instrument"></play-panel-play-guitar>
                </div>
			</section>

			<section id="modifiers">
				<button class="btn play" @click="changeView('play')"><icon name="play"></icon></button>
				<button class="btn fx" @click="changeView('FX')"><p><b>FX</b></p></button>
			</section>
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
	import PlayPanelPlayKeyboard from './PlayPanelComponents/PlayPanelPlayKeyboardVirtual.vue'
	import PlayPanelPlayPiano from './PlayPanelComponents/PlayPanelPlayPiano.vue'
	import PlayPanelPlayGuitar from './PlayPanelComponents/PlayPanelPlayGuitar.vue'
    
    var controlKeyboard = require("./PlayPanelComponents/PlayControllerKeyboard.js")
	var soundApi = require("./PlayPanelComponents/PlayApi.js");
    
	export default {
		data() {
			return {
				isLoaded: true,
                isPlaying: true,
				panel: "keyboard",
                
                instrument: null
			}
		},
		components: {
			PlayPanelFx,
			PlayPanelPlayKeyboard,
            PlayPanelPlayPiano,
            PlayPanelPlayGuitar,
		},
		methods: {
			changeView(evt) {
                this.isPlaying = evt === "play" ? true : false;
			},
            changePanel(evt) {
				console.log(evt);
                console.log(this.instrument);
                
				this.panel = evt;
            },
            keytyping(that) {
                window.addEventListener("keydown", function (evt) {
                    if (evt.key === undefined)
                        return;

//                    console.log(evt.keyCode);
                    let instr = that.instrument;

                    controlKeyboard.getSound(instr, evt.keyCode);
                }, true);
            }
		},
        created() {
            this.keytyping(this);
            
        },
        watch: {
            instrument: function() {
                console.log(this.instrument);
                let path = "/static/sounds/electric_guitar/" + this.instrument.toLowerCase();
//                console.log(path);
                soundApi.loadSounds(path);
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
		width: 40rem;
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
		margin: auto;
		width: 1.5rem;
	}
	
	#readers {
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
