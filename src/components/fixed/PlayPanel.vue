<template lang="html">
	<div>
		<section class="play-panel" v-if="isLoaded">
            <play-panel-fx v-if="isPlaying === 'FX'"></play-panel-fx>
            <play-panel-settings v-if="isPlaying === 'settings'"></play-panel-settings>
            
            <section v-if="isPlaying === 'play'">
                <h2 class="play-title">Play</h2>

                <section id="readers">
                    <button class="btn piano" @click="changePanel('piano')"><img class="btn-img" src="/static/logos/piano_keys.png" alt=""></button>
                    <button class="btn fret" @click="changePanel('g-fret')"><img class="btn-img" src="/static/logos/guitar.svg" alt=""></button>
                    <button class="btn keyboard" @click="changePanel('keyboard')"><icon name="keyboard"></icon></button>
                </section>

                <div id="play-style">
                        <play-panel-play-keyboard v-if="panel == 'keyboard'" :child-instr="instrument" :is-shift="isShift"></play-panel-play-keyboard>
                        <play-panel-play-piano v-if="panel == 'piano'" :child-instr="instrument" :is-shift="isShift"></play-panel-play-piano>
                        <play-panel-play-guitar v-if="panel == 'g-fret'" :child-instr="instrument" :is-shift="isShift"></play-panel-play-guitar>
                </div>
			</section>

			<section id="modifiers">
				<button class="btn play" @click="changeView('play')"><icon name="play"></icon></button>
				<button class="btn fx" @click="changeView('FX')"><p><b>FX</b></p></button>
				<button class="btn settings" @click="changeView('settings')"><icon name="cog"></icon></button>
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
	import PlayPanelSettings from './PlayPanelComponents/PlayPanelSettings.vue'
	import PlayPanelPlayKeyboard from './PlayPanelComponents/PlayPanelPlayKeyboardVirtual.vue'
	import PlayPanelPlayPiano from './PlayPanelComponents/PlayPanelPlayPiano.vue'
	import PlayPanelPlayGuitar from './PlayPanelComponents/PlayPanelPlayGuitar.vue'
    
  var controlKeyboard = require("./PlayPanelComponents/PlayControllerKeyboard.js")
	var soundApi = require("./PlayPanelComponents/PlayApi.js");
    
	export default {
		data() {
			return {
				isLoaded: true,
        isPlaying: "play",
				panel: "keyboard",
        isShift: false,
        isFunctionnal: false
			}
		},
		computed: {
			instrument: function () {
				return this.$store.getters.instrument
			}
		},
		components: {
			PlayPanelFx,
      PlayPanelSettings,
			PlayPanelPlayKeyboard,
      PlayPanelPlayPiano,
      PlayPanelPlayGuitar,
		},
		methods: {
		  changeView(evt) {
        this.isPlaying = evt;
			},
      changePanel(evt) {
			  this.panel = evt;
      },
      keytyping(that) {
        if (that.isFunctionnal)
          return;

        window.addEventListener("keydown", that.playANote, true);
        window.addEventListener("keyup", that.setShiftState, true);
        that.isFunctionnal = true;
      },
      playANote(event) {
        if (!window.hasKeyboard)
          return;

        this.setShiftState(event)

        if (event.key === undefined)
            return;

        let instr = this.instrument;

        controlKeyboard.getSound(instr, event);
      },
      setShiftState(event) {
        this.isShift = event.shiftKey || event.getModifierState( 'CapsLock' ) || false;
      }
		},
    created() {
			this.$ebus.$on('sel-instr', (selectedInstrument) => {
				this.instrument = selectedInstrument;
			});
		},
    mounted() {
			if (!window.hasKeyboard)
				this.keytyping(this);
			window.hasKeyboard = true;
			
			let iName = this.instrument.name.toLowerCase();
			let iType = this.instrument.type.toLowerCase();
			soundApi.loadSounds(iName, iType);
    },
    destroyed() {
      window.removeEventListener("keydown", this.playANote, true);
		},
    watch: {
        instrument: function() {
            let iName = this.instrument.name.toLowerCase();
            let iType = this.instrument.type.toLowerCase();
            
            soundApi.loadSounds(iName, iType);
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
