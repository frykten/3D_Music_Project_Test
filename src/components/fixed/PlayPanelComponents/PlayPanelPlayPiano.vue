<template lang="html">
	<section id="main">
       <div id="piano">
           <template v-for="n in octave">
               <div v-for="key in keys" class="white" :class="[key.note, key.color, key.special]" :data-note="key.note" :width="key.color == 'white' ? 20 : 16" :height="key.color == 'white ' ? 80 : 50" @mousedown="activeBtn($event)" @mouseup="unActiveBtn($event)"/>
           </template>
       </div>
       <input type="range" min="1" max="3" v-model="octave">
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
                        note: "c",
                        color: "white"
                    },
                    { 
                        note: "cs",
                        color: "black"
                    },

                    { 
                        note: "d",
                        color: "white"
                    },
                    { 
                        note: "ds",
                        color: "black"
                    },
                    { 
                        note: "e",
                        color: "white"
                    },
                    { 
                        note: "",
                        special: "null"
                    },
                    { 
                        note: "f",
                        color: "white"
                    },
                    { 
                        note: "fs",
                        color: "black"
                    },
                    { 
                        note: "g",
                        color: "white"
                    },
                    { 
                        note: "gs",
                        color: "black"
                    },
                    { 
                        note: "a",
                        color: "white"
                    },
                    { 
                        note: "as",
                        color: "black"
                    },
                    { 
                        note: "b",
                        color: "white"
                    },
                    { 
                        note: "",
                        special: "null"
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
    
    .white {
        background: white;
        border: solid 1px grey;
        height: 80px;
        
        width: 20px;
    }
    
    .black {
        background: black;
        border: solid 1px black;
        height: 50px;
        margin-left: -16px;
        position: relative;
        left: 8px;
        width: 16px;
    }
    
    .null {
        display: none;
    }
    
    .active {
        background: red;
    }
</style>
