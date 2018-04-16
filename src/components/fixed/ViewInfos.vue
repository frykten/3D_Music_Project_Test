<template lang="html">
	<section id="info" :class="{hidden: isHidden}">
		<div id="arrow">
			<div @click="showChat()">
				<icon :name='arrow' scale="5"></icon>
			</div>
		</div>

		<section id="content">
			<header id="header">
				<h2>Fender Stratocaster Standard HSH</h2>
			</header>

			<div id="messages">
				<ul>
					<li class="line"><strong>{{instr.type}}</strong></li>
					<li v-for="i in instr.infos" class="line">{{i}}</li>
				</ul>

				<p>Smurf</p>
			</div>
		</section>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				isHidden: true,
				arrow: "chevron-left",
				instr: {
					type: "Electric Guitar",
					name: "Fender_Standard_Strat_HSH_PF_BLK",
					constructor: {
						name: "Fender",
						adress: "",
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
						"21 Medium jumbo frets",
						"Scale: 648 mm",
						"Nut width: 42 mm",
						"Pickups: 2x Blacktop humbucking (bridge and neck) & 1x standard Strat single coil (middle)",
						"5-Way switch",
						"1x Master volume",
						"2x Tone controls (push / push on the second tone control for coil split)",
						"Nickel / Chrome hardware",
						"Vintage-style synchronised tremolo",
						"Standard string gauge: 009 - 046 (Article Nr: 103326)",
						"Finish: Black",
						"Made in Mexico"
					],
				}
			}
		},
		methods: {
			showChat() {
				this.isHidden = !this.isHidden;
				this.arrow = this.isHidden ? "chevron-left" : "chevron-right";
			}
		}
	}
</script>

<style lang="scss" scoped>
	#info {
		position: fixed;
		right: 0;
		bottom: 3vh;
		width: 30vw;
		height: 88vh;
		background-color: rgba(211, 211, 211, 0.4);
	}

	.hidden {
		right: -30vw !important;
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
		width: 90%;
		height: inherit;
	}

	.line {
		list-style: circle;
	}
</style>
