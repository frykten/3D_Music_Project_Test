<template lang="html">
	<section id="main">
		<ul id="left-keyboard" class="pad">
			<li class="btn" v-for="(key, id) in keyboardL" :class="key.class" :data-id="id" @mousedown="activeBtn($event)" @mouseup="unActiveBtn($event)"><span class="btn-nb">{{isShift ? (!key.spanNb ? '' : (parseInt(key.spanNb) + 8)) : key.spanNb}}</span><p class="btn-text">{{key.text}}</p><span class="btn-key">{{key.spanKey}}</span></li>
		</ul>
		
		<div id="legend" class="pad">
            <p id="legend-text">Legend</p>
		    <p class="btn chord-6">{{ instrument.type == 'Electric_Guitar' ? '6th chord' : 'snare' }}</p>
		    <p class="btn chord-5">{{ instrument.type == 'Electric_Guitar' ? '5th chord' : 'kick' }}</p>
		    <p class="btn chord-4">{{ instrument.type == 'Electric_Guitar' ? '4th chord' : 'hi-hat' }}</p>
		    <p class="btn chord-3">{{ instrument.type == 'Electric_Guitar' ? '3rd chord' : 'toms' }}</p>
		    <p class="btn chord-2">{{ instrument.type == 'Electric_Guitar' ? '2nd chord' : 'ride' }}</p>
		    <p class="btn chord-1">{{ instrument.type == 'Electric_Guitar' ? '1st chord' : 'crash' }}</p>
		    <p class="btn special">{{ instrument.type == 'Electric_Guitar' ? 'special key' : 'special key' }}</p>
		    <p class="btn disabled">not used</p>
		</div>
		
		<ul id="right-keyboard" class="pad">
			<li class="btn" v-for="(key, id) in keyboardR" :class="key.class" :data-id="id + 61" @mousedown="activeBtn($event)" @mouseup="unActiveBtn($event)">{{key.text}}</li>
		</ul>
	</section>
</template>

<script>
    const control = require("./PlayControllerKeyboardVirtual.js")
    
	export default {
		data() {
			return {
				keyboardL: [
					{
						text: "²", spanKey: "", spanNb: "",
						class: "weight-1h ",
					},
					{
						text: "&", spanKey: "", spanNb: "",
                        spanKeyGuitar: "E",
                        spanNbGuitar: "0",
					},
					{
						text: "é", spanKey: "", spanNb: "",
                        spanKeyGuitar: "Ab",
                        spanNbGuitar: "4",
					},
					{
						text: '"', spanKey: "", spanNb: "",
                        spanKeyGuitar: "A",
                        spanNbGuitar: "0",
					},
					{
						text: "'", spanKey: "", spanNb: "",
                        spanKeyGuitar: "Db",
                        spanNbGuitar: "4",
					},
					{
						text: "(", spanKey: "", spanNb: "",
                        spanKeyGuitar: "D",
                        spanNbGuitar: "0",
					},
					{
						text: "-", spanKey: "", spanNb: "",
                        spanKeyGuitar: "F",
                        spanNbGuitar: "4",
					},
					{
						text: "è", spanKey: "", spanNb: "",
                        spanKeyGuitar: "G",
                        spanNbGuitar: "0",
					},
					{
						text: "_", spanKey: "", spanNb: "",
                        spanKeyGuitar: "B",
                        spanNbGuitar: "4",
					},
					{
						text: "ç", spanKey: "", spanNb: "",
                        spanKeyGuitar: "B",
                        spanNbGuitar: "0",
					},
					{
						text: "à", spanKey: "", spanNb: "",
                        spanKeyGuitar: "Eb",
                        spanNbGuitar: "4",
					},
					{
						text: ")", spanKey: "", spanNb: "",
                        spanKeyGuitar: "E",
                        spanNbGuitar: "0",
					},
					{
						text: "=", spanKey: "", spanNb: "",
                        spanKeyGuitar: "G",
                        spanNbGuitar: "3",
					},
					{
						text: "backarrow", spanKey: "", spanNb: "",
						class: "weight-1h ",
					},
					{
						text: "tab", spanKey: "", spanNb: "",
						class: "weight-2 ",
					},
					{
						text: "a", spanKey: "", spanNb: "",
                        spanKeyGuitar: "Fb",
                        spanNbGuitar: "1",
					},
					{
						text: "z", spanKey: "", spanNb: "",
                        spanKeyGuitar: "A",
                        spanNbGuitar: "5",
					},
					{
						text: "e", spanKey: "", spanNb: "",
                        spanKeyGuitar: "Bb",
                        spanNbGuitar: "1",
					},
					{
						text: "r", spanKey: "", spanNb: "",
                        spanKeyGuitar: "D",
                        spanNbGuitar: "5",
					},
					{
						text: "t", spanKey: "", spanNb: "",
                        spanKeyGuitar: "Eb",
                        spanNbGuitar: "1",
					},
					{
						text: "y", spanKey: "", spanNb: "",
                        spanKeyGuitar: "G",
                        spanNbGuitar: "5",
					},
					{
						text: "u", spanKey: "", spanNb: "",
                        spanKeyGuitar: "Ab",
                        spanNbGuitar: "1",
					},
					{
						text: "i", spanKey: "", spanNb: "",
                        spanKeyGuitar: "C",
                        spanNbGuitar: "5",
					},
					{
						text: "o", spanKey: "", spanNb: "",
                        spanKeyGuitar: "C",
                        spanNbGuitar: "1",
					},
					{
						text: "p", spanKey: "", spanNb: "",
                        spanKeyGuitar: "E",
                        spanNbGuitar: "5",
					},
					{
						text: "^", spanKey: "", spanNb: "",
                        spanKeyGuitar: "Fb",
                        spanNbGuitar: "1",
					},
					{
						text: "$", spanKey: "", spanNb: "",
                        spanKeyGuitar: "Ab",
                        spanNbGuitar: "4",
					},
					{
						text: "*", spanKey: "", spanNb: "",
                        spanKeyGuitar: "A",
						spanNbGuitar: "5",
					},
					{
						text: "caps", spanKey: "", spanNb: "",
						class: "weight-2h ",
					},
					{
						text: "q", spanKey: "", spanNb: "",
                        spanKeyGuitar: "F",
                        spanNbGuitar: "2",
					},
					{
						text: "s", spanKey: "", spanNb: "",
                        spanKeyGuitar: "Bb",
                        spanNbGuitar: "6",
					},
					{
						text: "d", spanKey: "", spanNb: "",
                        spanKeyGuitar: "B",
                        spanNbGuitar: "2",
					},
					{
						text: "f", spanKey: "", spanNb: "",
                        spanKeyGuitar: "Eb",
                        spanNbGuitar: "6",
					},
					{
						text: "g", spanKey: "", spanNb: "",
                        spanKeyGuitar: "E",
                        spanNbGuitar: "2",
					},
					{
						text: "h", spanKey: "", spanNb: "",
                        spanKeyGuitar: "Ab",
                        spanNbGuitar: "6",
					},
					{
						text: "j", spanKey: "", spanNb: "",
                        spanKeyGuitar: "A",
                        spanNbGuitar: "2",
					},
					{
						text: "k", spanKey: "", spanNb: "",
                        spanKeyGuitar: "Db",
                        spanNbGuitar: "6",
					},
					{
						text: "l", spanKey: "", spanNb: "",
                        spanKeyGuitar: "Db",
                        spanNbGuitar: "2",
					},
					{
						text: "m", spanKey: "", spanNb: "",
                        spanKeyGuitar: "Fb",
                        spanNbGuitar: "6",
					},
					{
						text: "ù", spanKey: "", spanNb: "",
                        spanKeyGuitar: "F",
                        spanNbGuitar: "2",
					},
					{
						text: "enter", spanKey: "", spanNb: "",
						class: "weight-1h ",
					},
					{
						text: "shift", spanKey: "", spanNb: "",
						class: "weight-3",
					},
					{
						text: "w", spanKey: "", spanNb: "",
                        spanKeyGuitar: "G",
                        spanNbGuitar: "3",
					},
					{
						text: "x", spanKey: "", spanNb: "",
                        spanKeyGuitar: "B",
                        spanNbGuitar: "7",
					},
					{
						text: "c", spanKey: "", spanNb: "",
                        spanKeyGuitar: "C",
                        spanNbGuitar: "3",
					},
					{
						text: "v", spanKey: "", spanNb: "",
                        spanKeyGuitar: "E",
                        spanNbGuitar: "7",
					},
					{
						text: "b", spanKey: "", spanNb: "",
                        spanKeyGuitar: "Fb",
                        spanNbGuitar: "3",
					},
					{
						text: "n", spanKey: "", spanNb: "",
                        spanKeyGuitar: "A",
                        spanNbGuitar: "7",
					},
					{
						text: ",", spanKey: "", spanNb: "",
                        spanKeyGuitar: "Bb",
                        spanNbGuitar: "3",
					},
					{
						text: ";", spanKey: "", spanNb: "",
                        spanKeyGuitar: "D",
                        spanNbGuitar: "7",
					},
					{
						text: ":", spanKey: "", spanNb: "",
                        spanKeyGuitar: "D",
                        spanNbGuitar: "3",
					},
					{
						text: "!", spanKey: "", spanNb: "",
                        spanKeyGuitar: "F",
                        spanNbGuitar: "7",
					},
					{
						text: "shift", spanKey: "", spanNb: "",
						class: "weight-2",
					},
					{
						text: "ctrl", spanKey: "", spanNb: "",
						class: "weight-ab",
					},
					{
						text: "windows", spanKey: "", spanNb: "",
						class: "weight-ab ",
					},
					{
						text: "alt", spanKey: "", spanNb: "",
						class: "weight-ab",
					},
					{
						text: "space", spanKey: "", spanNb: "",
						class: "weight-space",
					},
					{
						text: "<", spanKey: "", spanNb: "",
						class: "weight-ab ",
					},
					{
						text: "alt gr", spanKey: "", spanNb: "",
						class: "weight-ab ",
					},
					{
						text: "fn", spanKey: "", spanNb: "",
						class: "weight-ab ",
					},
					{
						text: "ctrl", spanKey: "", spanNb: "",
						class: "weight-ab",
					},
				],
				keyboardR: [
					{
						text: "verr", spanKey: "", spanNb: "",
						class: "",
					},
					{
						text: "/", spanKey: "", spanNb: "",
					},
					{
						text: "*", spanKey: "", spanNb: "",
					},
					{
						text: "-", spanKey: "", spanNb: "",
					},
					{
						text: "7", spanKey: "", spanNb: "",
					},
					{
						text: "8", spanKey: "", spanNb: "",
					},
					{
						text: "9", spanKey: "", spanNb: "",
					},
					{
						text: "+", spanKey: "", spanNb: "",
						class: "weight-v ",
					},
					{
						text: "4", spanKey: "", spanNb: "",
					},
					{
						text: "5", spanKey: "", spanNb: "",
					},
					{
						text: "6", spanKey: "", spanNb: "",
					},
					{
						text: "enter", spanKey: "", spanNb: "",
						class: "weight-v ",
					},
					{
						text: "1", spanKey: "", spanNb: "",
					},
					{
						text: "2", spanKey: "", spanNb: "",
					},
					{
						text: "3", spanKey: "", spanNb: "",
					},
					{
						class: "", spanKey: "", spanNb: "",
					},
					{
						text: "0", spanKey: "", spanNb: "",
						class: "weight-2 ",
					},
					{
						text: ".", spanKey: "", spanNb: "",
						class: "",
					},
					{
						class: "", spanKey: "", spanNb: "",
					},
				],
			}
		},
		computed: {
			instrument: function () {
				return this.$store.getters.instrument
			}
		},
    props: ['childInstr', 'isShift'],
		methods: {
			activeBtn(event) {
                let target = event.target.closest("li");
                target.classList.add("active");
                
                let instr = this.childInstr;
                let key = target.dataset.id;
                
//                console.log(key);
                let sound = control.getSound(instr, key, this.isShift);
			},
			unActiveBtn(event) {
                event.target.closest("li").classList.remove("active");
			},
            colorBtns() {
                var btns = document.querySelectorAll("li.btn");
				let cls = ["disabled", "special", "chord-6", "chord-5", "chord-4", "chord-3", "chord-2", "chord-1"];
				let p = null;
				
				if (this.childInstr) {
                	p = this.childInstr.type.toLowerCase();
				}
                // Place icons
//                btns[13].innerHTML = "<icon name='long-arrow-alt-left'></icon>";
//                btns[54].innerHTML = '<icon name="windows"></icon>';
                
                // If guitar
                if (p == "electric_guitar") {
                    for (let b of btns) {
						b.classList.remove(...cls);
						
                        let i = parseInt(b.dataset.id);
                        
                        if (i < 61) {
                            this.keyboardL[i].spanKey = this.keyboardL[i].spanKeyGuitar;
                            this.keyboardL[i].spanNb = this.keyboardL[i].spanNbGuitar;
                        }
                        
                        switch (i) {
                            case 1:
                            case 15:
                            case 29:
                            case 42:
                            case 2:
                            case 16:
                            case 30:
                            case 43:
                                b.classList.add("chord-6");
                                break;
                            case 3:
                            case 17:
                            case 31:
                            case 44:
                            case 4:
                            case 18:
                            case 32:
                            case 45:
                                b.classList.add("chord-5");
                                break;
                            case 5:
                            case 19:
                            case 33:
                            case 46:
                            case 6:
                            case 20:
                            case 34:
                            case 47:
                                b.classList.add("chord-4");
                                break;
                            case 7:
                            case 21:
                            case 35:
                            case 48:
                            case 8:
                            case 22:
                            case 36:
                            case 49:
                                b.classList.add("chord-3");
                                break;
                            case 9:
                            case 23:
                            case 37:
                            case 50:
                            case 10:
                            case 24:
                            case 38:
                            case 51:
                                b.classList.add("chord-2");
                                break;
                            case 11:
                            case 25:
                            case 39:
                            case 12:
                            case 26:
                            case 27:
                                b.classList.add("chord-1");
                                break;
                            case 28:
                            case 41:
                            case 52:
                            case 53:
                            case 55:
                            case 60:
                                b.classList.add("special");
                                break;
                            default:
                                b.classList.add("disabled");
                        }
                    }
                }
                else if (p == "bass") {
                    for (let b of btns) {
						b.classList.remove(...cls);
                        switch (parseInt(b.dataset.id)) {
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                            case 9:
                            case 10:
                            case 62:
                            case 63:
                            case 64:
                                b.classList.add("chord-6");
                                break;
                            case 15:
                            case 16:
                            case 17:
                            case 18:
                            case 19:
                            case 20:
                            case 21:
                            case 22:
                            case 23:
                            case 24:
                            case 65:
                            case 66:
                            case 67:
                                b.classList.add("chord-5");
                                break;
                            case 29:
                            case 30:
                            case 31:
                            case 32:
                            case 33:
                            case 34:
                            case 35:
                            case 36:
                            case 37:
                            case 38:
                            case 69:
                            case 70:
                            case 71:
                                b.classList.add("chord-4");
                                break;
                            case 42:
                            case 43:
                            case 44:
                            case 45:
                            case 46:
                            case 47:
                            case 48:
                            case 49:
                            case 50:
                            case 51:
                            case 73:
                            case 74:
                            case 75:
                                b.classList.add("chord-3");
                                break;
                            case 41:
                            case 52:
                            case 53:
                            case 55:
                            case 60:
                                b.classList.add("special");
                                break;
                            default:
                                b.classList.add("disabled");
                        }
                    }
                }
                else if (p == "piano") {
                    for (let b of btns) {
						b.classList.remove(...cls);
                        switch (parseInt(b.dataset.id)) {
                            case 1:
                            case 15:
                            case 2:
                            case 16:
                            case 3:
                            case 17:
                                b.classList.add("chord-6");
                                break;
                            case 18:
                            case 5:
                            case 19:
                            case 6:
                            case 20:
                            case 21:
                            case 8:
                            case 22:
                            case 9:
                            case 23:
                            case 10:
                            case 24:
                                b.classList.add("chord-5");
                                break;
                            case 42:
                            case 30:
                            case 43:
                            case 31:
                            case 44:
                            case 45:
                            case 33:
                            case 46:
                            case 34:
                            case 47:
                            case 35:
                            case 48:
                                b.classList.add("chord-4");
                                break;
                            case 49:
                            case 37:
                            case 50:
                            case 38:
                            case 51:
                                b.classList.add("chord-3");
                                break;
                            case 41:
                            case 52:
                            case 53:
                            case 55:
                            case 60:
                                b.classList.add("special");
                                break;
                            default:
                                b.classList.add("disabled");
                        }
                    }
                }
				else if (p == "drumkit") {
					for (let b of btns) {
						b.classList.remove(...cls);
                        switch (parseInt(b.dataset.id)) {
							// Snare
							case 44:
								b.classList.add("chord-6");
                                break;
							// Hi-hats
							case 43:
								b.classList.add("chord-4");
                                break;
							case 42:
								b.classList.add("chord-4");
                                break;
							// Toms
							case 32:
								b.classList.add("chord-3");
                                break;
							case 33:
								b.classList.add("chord-3");
                                break;
							case 46:
								b.classList.add("chord-3");
                                break;
							// Crashes
							case 18:
								b.classList.add("chord-2");
                                break;
							case 20:
								b.classList.add("chord-2");
                                break;
							// Rides
							case 30:
								b.classList.add("chord-1");
                                break;
							case 35:
								b.classList.add("chord-1");
                                break;
							// Kick
							case 56:
								b.classList.add("chord-5");
                                break;
							// Disabled
							default:
								b.classList.add("disabled");
						}
					}
				}
				else {
					for (let b of btns) {
                        switch (parseInt(b.dataset.id)) {
							default:
								b.classList.add("disabled");
						}
					}
				}
            }
		},
        watch: {
            childInstr() {
				this.colorBtns()
			}
        },
        mounted() { this.colorBtns() },
	}
</script>

<style lang="scss" scoped>
	#main {
		align-items: center;
        color: rgb(248, 248, 248);
		display: flex;
/*		flex-direction: column;*/
        flex-wrap: wrap;
		justify-content: space-around;
        text-shadow: 0 0 2px #272727;
/*        width: 24rem;*/
	}
	
	.pad {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin: 10px;
        width: auto;
	}
	
	#left-keyboard {
		width: inherit;
	}
    
    #legend {
        height: 11rem;
        display: grid;
        font-weight: bolder;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 4px;
        grid-row-gap: 2px;
    }
    
    #legend-text {
        grid-column: span 2;
    }
	
	#right-keyboard {
/*        align-self: flex-end;*/
        margin: 10px 5rem;
		width: 11rem;
	}
	
	.btn {
		align-items: center;
		background: #363636;
		border: solid 2px rgba(221, 221, 221, 0.75);
		border-radius: 3px;
		display: flex;
		font-size: .75rem;
		height: 2.2rem;
		justify-content: center;
		list-style: none;
		margin: .1rem .05rem;
		width: 2.4rem;
	}
    
    .btn-text {

    }
    
    .btn-key {
        align-self: flex-end;
        color: white;
        font-weight: bolder;
        margin-left: .6rem;
        position: absolute;
    }
    
    .btn-nb {
        align-self: flex-start;
        color: white;
        font-weight: bolder;
        margin-left: -0.6rem;
        position: absolute;
    }
    
    /* Size x1.5 */
	.weight-1h {
		width: 3.65rem;
	}
    /* Size x2 */
	.weight-2 {
		width: 4.9rem;
	}
    /* Size x2.5 */
	.weight-2h {
		width: 6.15rem;
	}
    /* Size x3 */
	.weight-3 {
		width: 7.4rem;
	}
    /* Size x3.5 */
	.weight-3h {
		width: 8.65rem;
	}
    /* Size (1/2)/7 */
	.weight-ab {
		width: 2.825rem;
	}
    /* Size 1/2 */
	.weight-space {
		width: 16.9rem;
	}
    /* Size VERTICAL x2 */
	.weight-v {
/*		height: 2.9rem;*/
	}
    
    /* Guitar */
    .chord-6 {
		background: hsl(15, 65%, 45%);
	}
    .chord-5 {
		background: hsl(355, 60%, 40%);
	}
    .chord-4 {
		background: hsl(335, 50%, 55%);
	}
    .chord-3 {
		background: hsl(315, 45%, 40%);
	}
    .chord-2 {
		background: hsl(135, 55%, 35%);
	}
    .chord-1 {
		background: hsl(70, 50%, 45%);
	}
    
	.special {
        background: hsl(200, 50%, 47%);
    }
    
    /* Effects */
	.disabled {
        background: #656565;
        border: solid 2px rgba(221, 221, 221, 0.5);
		opacity: .85;
	}
	.active {
		background: red;
	}
    .test {
        color: green;
        background: blue;
    }
</style>
