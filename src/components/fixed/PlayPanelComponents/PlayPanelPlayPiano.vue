<template lang="html">
	<section id="main">
       <div id="piano">
           <div class="octaves" :class=" 'octave-' + new Intl.NumberFormat().format(n)" v-for="n in octave">
			   <div v-for="key in keys" class="btns" :class="[key.note, key.color]" :data-note="key.note" :width="key.color == 'white' ? 20 : 16" :height="key.color == 'white ' ? 80 : 50" @mousedown="activeBtn($event)" @mouseup="unActiveBtn($event)"><span>{{key.note}}</span></div>
           </div>
       </div>
       <input type="range" min="1" max="4" v-model="octave">
       <p>Nombre d'octaves : {{octave}}</p>
	</section>
</template>

<script>
    const control = require("./PlayControllerPiano.js")
    
	export default {
		data() {
			return {
                keys: [
                    { 
                        note: "C",
                        color: "white"
                    },
                    { 
                        note: "Db",
                        color: "black"
                    },

                    { 
                        note: "D",
                        color: "white"
                    },
                    { 
                        note: "Eb",
                        color: "black"
                    },
                    { 
                        note: "E",
                        color: "white"
                    },
                    { 
                        note: "",
                    },
                    { 
                        note: "F",
                        color: "white"
                    },
                    { 
                        note: "Gb",
                        color: "black"
                    },
                    { 
                        note: "G",
                        color: "white"
                    },
                    { 
                        note: "Ab",
                        color: "black"
                    },
                    { 
                        note: "A",
                        color: "white"
                    },
                    { 
                        note: "Bb",
                        color: "black"
                    },
                    { 
                        note: "B",
                        color: "white"
                    },
                    { 
                        note: "",
                    },
                ],
                octave: 2,
			}
		},
        props: ['childInstr'],
        methods: {
			activeBtn(event) {
                event.target.classList.add("active");
                
                let instr = this.childInstr;
                let key = event.target.dataset.id;
                
                let sound = control.getSound(instr, key);
                sound.play();
                
                console.log(key);
			},
			unActiveBtn(event) {
				event.target.classList.remove("active");
			},
			calcOctave() {
				this.octave = parseInt(this.octave);
			}
		},
		watch: {
			octave: 'calcOctave'
		},
		computed: {
			computedOctave() {
//			  return this.octave.toString();
			},
		},
	}
</script>

<style lang="scss" scoped>
	#main {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
    
    #piano {
        display: flex;
    }
	
	.octaves {
		display: flex;
	}
    
	.btns {
		border-radius: 0 0 3px 3px;
		display: flex;
		flex-direction: column;
		font-size: .8rem;
		justify-content: flex-end;
	}
    .white {
        background: white;
        border: solid 1px grey;
		color: black;
		font-weight: bold;
        height: 80px;
        width: 20px;
    }
    .black {
        background: black;
        border: solid 1px black;
		color: white;
        height: 50px;
        margin-left: -16px;
        position: relative;
        left: 8px;
        width: 16px;
    }
	
	.octave-1 .white {
		background: hsl(0, 100%, 90%);
	}
	.octave-1 .black {
		background: hsl(0, 100%, 10%);
	}
	
	.octave-2 .white {
		background: hsl(40, 100%, 90%);
	}
	.octave-2 .black {
		background: hsl(40, 100%, 10%);
	}
	
	.octave-3 .white {
		background: hsl(120, 100%, 90%);
	}
	.octave-3 .black {
		background: hsl(120, 100%, 10%);
	}
	
	.octave-4 .white {
		background: hsl(180, 100%, 90%);
	}
	.octave-4 .black {
		background: hsl(180, 100%, 10%);
	}
	
	span {
		
		
	}
    
    .active {
        background: red !important;
    }
</style>
