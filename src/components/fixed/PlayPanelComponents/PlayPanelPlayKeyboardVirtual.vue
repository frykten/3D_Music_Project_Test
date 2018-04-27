<template lang="html">
	<section id="main">
		<ul id="left-keyboard" class="pad">
			<li class="btn" v-for="(key, id) in keyboardL" :class="key.class" :data-id="id" @mousedown="activeBtn($event)" @mouseup="unActiveBtn($event)"><p class="btn-text">{{key.text}}</p><span class="btn-key">{{key.spanKey}}</span></li>
		</ul>
		
		<ul id="legend" class="pad">
            <p>Legend</p>
		    <li class="btn chord-6">6th chord</li>
		    <li class="btn chord-5">5th chord</li>
		    <li class="btn chord-4">4th chord</li>
		    <li class="btn chord-3">3rd chord</li>
		    <li class="btn chord-2">2nd chord</li>
		    <li class="btn chord-1">1st chord</li>
		    <li class="btn special">special key</li>
		    <li class="btn disabled">not working</li>
		</ul>
		
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
						text: "²", spanKey: "",
						class: "weight-1h ",
					},
					{
						text: "&", spanKey: "",
                        spanKeyGuitar: "E",
					},
					{
						text: "é", spanKey: "",
                        spanKeyGuitar: "Ab",
					},
					{
						text: '"', spanKey: "",
                        spanKeyGuitar: "A",
					},
					{
						text: "'", spanKey: "",
                        spanKeyGuitar: "Db",
					},
					{
						text: "(", spanKey: "",
                        spanKeyGuitar: "D",
					},
					{
						text: "-", spanKey: "",
                        spanKeyGuitar: "F",
					},
					{
						text: "è", spanKey: "",
                        spanKeyGuitar: "G",
					},
					{
						text: "_", spanKey: "",
                        spanKeyGuitar: "B",
					},
					{
						text: "ç", spanKey: "",
                        spanKeyGuitar: "B",
					},
					{
						text: "à", spanKey: "",
                        spanKeyGuitar: "Eb",
					},
					{
						text: ")", spanKey: "",
                        spanKeyGuitar: "E",
						class: "",
					},
					{
						text: "=", spanKey: "",
                        spanKeyGuitar: "G",
						class: "",
					},
					{
						text: "backarrow", spanKey: "",
						class: "weight-1h ",
					},
					{
						text: "tab", spanKey: "",
						class: "weight-2 ",
					},
					{
						text: "a", spanKey: "",
                        spanKeyGuitar: "Fb",
					},
					{
						text: "z", spanKey: "",
                        spanKeyGuitar: "A",
					},
					{
						text: "e", spanKey: "",
                        spanKeyGuitar: "Bb",
					},
					{
						text: "r", spanKey: "",
                        spanKeyGuitar: "D",
					},
					{
						text: "t", spanKey: "",
                        spanKeyGuitar: "Eb",
					},
					{
						text: "y", spanKey: "",
                        spanKeyGuitar: "G",
					},
					{
						text: "u", spanKey: "",
                        spanKeyGuitar: "Ab",
					},
					{
						text: "i", spanKey: "",
                        spanKeyGuitar: "C",
					},
					{
						text: "o", spanKey: "",
                        spanKeyGuitar: "C",
					},
					{
						text: "p", spanKey: "",
                        spanKeyGuitar: "E",
					},
					{
						text: "^", spanKey: "",
                        spanKeyGuitar: "Fb",
						class: "",
					},
					{
						text: "$", spanKey: "",
                        spanKeyGuitar: "Ab",
						class: "",
					},
					{
						text: "*", spanKey: "",
                        spanKeyGuitar: "A",
						class: "",
					},
					{
						text: "caps", spanKey: "",
						class: "weight-2h ",
					},
					{
						text: "q", spanKey: "",
                        spanKeyGuitar: "F",
					},
					{
						text: "s", spanKey: "",
                        spanKeyGuitar: "Bb",
					},
					{
						text: "d", spanKey: "",
                        spanKeyGuitar: "B",
					},
					{
						text: "f", spanKey: "",
                        spanKeyGuitar: "Eb",
					},
					{
						text: "g", spanKey: "",
                        spanKeyGuitar: "E",
					},
					{
						text: "h", spanKey: "",
                        spanKeyGuitar: "Ab",
					},
					{
						text: "j", spanKey: "",
                        spanKeyGuitar: "A",
					},
					{
						text: "k", spanKey: "",
                        spanKeyGuitar: "Db",
					},
					{
						text: "l", spanKey: "",
                        spanKeyGuitar: "Db",
					},
					{
						text: "m", spanKey: "",
                        spanKeyGuitar: "Fb",
					},
					{
						text: "ù", spanKey: "",
                        spanKeyGuitar: "F",
						class: "",
					},
					{
						text: "enter", spanKey: "",
						class: "weight-1h ",
					},
					{
						text: "shift", spanKey: "",
						class: "weight-3",
					},
					{
						text: "w", spanKey: "",
                        spanKeyGuitar: "G",
					},
					{
						text: "x", spanKey: "",
                        spanKeyGuitar: "B",
					},
					{
						text: "c", spanKey: "",
                        spanKeyGuitar: "C",
					},
					{
						text: "v", spanKey: "",
                        spanKeyGuitar: "E",
					},
					{
						text: "b", spanKey: "",
                        spanKeyGuitar: "Fb",
					},
					{
						text: "n", spanKey: "",
                        spanKeyGuitar: "A",
					},
					{
						text: ",", spanKey: "",
                        spanKeyGuitar: "Bb",
					},
					{
						text: ";", spanKey: "",
                        spanKeyGuitar: "D",
					},
					{
						text: ":", spanKey: "",
                        spanKeyGuitar: "D",
					},
					{
						text: "!", spanKey: "",
                        spanKeyGuitar: "F",
					},
					{
						text: "shift", spanKey: "",
						class: "weight-2",
					},
					{
						text: "ctrl", spanKey: "",
						class: "weight-ab",
					},
					{
						text: "windows", spanKey: "",
						class: "weight-ab ",
					},
					{
						text: "alt", spanKey: "",
						class: "weight-ab",
					},
					{
						text: "space", spanKey: "",
						class: "weight-space",
					},
					{
						text: "<", spanKey: "",
						class: "weight-ab ",
					},
					{
						text: "alt gr", spanKey: "",
						class: "weight-ab ",
					},
					{
						text: "fn", spanKey: "",
						class: "weight-ab ",
					},
					{
						text: "ctrl", spanKey: "",
						class: "weight-ab",
					},
				],
				keyboardR: [
					{
						text: "verr", spanKey: "",
						class: "",
					},
					{
						text: "/", spanKey: "",
					},
					{
						text: "*", spanKey: "",
					},
					{
						text: "-", spanKey: "",
					},
					{
						text: "7", spanKey: "",
					},
					{
						text: "8", spanKey: "",
					},
					{
						text: "9", spanKey: "",
					},
					{
						text: "+", spanKey: "",
						class: "weight-v ",
					},
					{
						text: "4", spanKey: "",
					},
					{
						text: "5", spanKey: "",
					},
					{
						text: "6", spanKey: "",
					},
					{
						text: "enter", spanKey: "",
						class: "weight-v ",
					},
					{
						text: "1", spanKey: "",
					},
					{
						text: "2", spanKey: "",
					},
					{
						text: "3", spanKey: "",
					},
					{
						class: "", spanKey: "",
					},
					{
						text: "0", spanKey: "",
						class: "weight-2 ",
					},
					{
						text: ".", spanKey: "",
						class: "",
					},
					{
						class: "", spanKey: "",
					},
				],
			}
		},
        props: ['childInstr'],
		methods: {
			activeBtn(event) {
                let target = event.target.closest("li");
                target.classList.add("active");
                
                let instr = this.childInstr;
                let key = target.dataset.id;
                
                let sound = control.getSound(instr, key);
                sound.play();
                
                console.log(key);
			},
			unActiveBtn(event) {
				event.target.closest("li").classList.remove("active");
			},
            colorBtns() {
                var btns = document.querySelectorAll("li.btn");
                
                // Place icons
                btns[13].innerHTML = "<icon name='long-arrow-alt-left'></icon>";
                btns[54].innerHTML = '<icon name="windows"></icon>';
                
                // If guitar
                if (true) {
                    
                    for (let b of btns) {
                        let i = parseInt(b.dataset.id);
                        
                        if (i < 61)
                            this.keyboardL[i].spanKey = this.keyboardL[i].spanKeyGuitar;
                        
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
                else if ("bass") {
                    for (let b of btns) {
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
                else if ("piano") {
                    for (let b of btns) {
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
				else if ("drums") {
					for (let b of btns) {
                        switch (parseInt(b.dataset.id)) {
							case 1:
								b.classList.add("special");
                                break;
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
            childInstr: 'colorBtns'
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
        grid-column-gap: 10px;
        grid-row-gap: 2px;
    }
    
    #legend p {
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
		width: 2.405rem;
	}
    /* Size 1/2 */
	.weight-space {
		width: 19.9rem;
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