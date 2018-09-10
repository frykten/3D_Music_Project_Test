<template lang="html">
	<section id="info" :class="{hidden: isHidden}">
		<div id="arrow">
			<div @click="showPanel()">
				<icon :name='arrow' scale="5"></icon>
			</div>
		</div>

		<section id="content" v-if="instrument">
			<header id="header">
				<h2>{{instrument.name.replace("_", " ")}}</h2>
				<p>{{instrument.type.replace("_", " ")}}</p>
			</header>

			<div id="messages">
				<ul>
					<li v-for="i in instr.infos" class="line">{{i}}</li>
				</ul>
				
				<hr id="hr-links">
				<a target="_blank" rel="noopener noreferrer" class="links" :href="instr.infoVendors.website">Shop on Fender Merch</a>
				
				<map-c></map-c>
				
			</div>
		</section>
	</section>
</template>

<script>
    import MapC from './Map.vue'
    
	export default {
		data() {
			return {
				isHidden: false,
				arrow: "chevron-left",
				instr: {
					type: "Electric_Guitar",
					name: "Stratocaster_HSS",
					constructor: {
						name: "Fender",
						adress: "17600 n. Perimeter Drive, Suite 100 Scottsdale, AZ 85255 USA",
						logo: "url",
						website: "http"
					},
					brand: "Stratocaster",
					infos: [
						"Alder body",
						"Maple neck",
						"Modern C neck shape",
						"Pau Ferro Fretboard",
						"Fretboard Radius 9.5",
						"22 Medium jumbo frets",
						"Scale: 648 mm",
						"Nut width: 42 mm",
						"Pickups: 1x Blacktop humbucking (bridge and neck) & 2x standard Strat single coil (middle)",
						"5-Way switch",
						"1x Master volume",
                        "Greasebucket™ tone circuit (rolls off highs without adding bass)",
						"2x Tone controls (push / push on the second tone control for coil split)",
						"Nickel / Chrome hardware",
						"Vintage-style synchronised tremolo",
						"Standard string gauge: 009 - 042",
						"Finish: Black",
						"Made in Mexico",
					],
          infoVendors: {
            website: "https://shop.fender.com/en-FR/electric-guitars/stratocaster/american-special-stratocaster-hss/0115700300.html?rl=en_US"
          },
				}
			}
		},
		computed: {
			instrument: function () {
				return this.$store.getters.instrument
			}
		},
    components: {
      MapC
    },
		methods: {
			showPanel() {
				this.isHidden = !this.isHidden;
				this.arrow = this.isHidden ? "chevron-left" : "chevron-right";
			}
		},
		beforeCreate() {
			console.log("created");

			this.$ebus.$on('sel-instr', (selectedInstrument) => {
				this.instrument = selectedInstrument;
				console.log("Instr : " + this.instrument.name);
			});
		}
	}
</script>

<style lang="scss" scoped>
	#info {
		position: fixed;
		right: 0;
		bottom: 3vh;
		width: 35vw;
		height: 88vh;
		background-color: rgba(211, 211, 211, 0.4);
	}

	.hidden {
		right: -35vw !important;
	}

	#arrow {
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
		left: -1.75em;
	}

	#content {
		width: 100%;
		height: 100%;
		padding: 1rem .8rem 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		color: white;
		overflow-y: scroll;
		overflow-x: hidden;
	}

	#content::-webkit-scrollbar {
		width: .6em;
	}

	#content::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	}

	#content::-webkit-scrollbar-thumb {
	  background-color: lightgrey;
	  outline: 1px solid slategrey;
	}

	#header {
		margin-bottom: 1.2rem;
		padding: .5em;
		font-size: 1.2rem;
		border-bottom: solid 1px white;
		border-bottom-left-radius: 7px;
	}

	#messages {
		margin: auto;
		padding: 10px 5px;
        text-align: left;
		width: 90%;
        margin-bottom: 4rem;
	}

	.line {
        margin-bottom: 5px;
		list-style: disc;
	}
    
    #hr-links {
        margin: 1rem 5px;
    }
    
    .links {
        color: #f5f2db;
        font-weight: bold;
    }
</style>
