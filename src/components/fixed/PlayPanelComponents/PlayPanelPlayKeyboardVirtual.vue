<template lang="html">
	<section id="main">
		<ul id="left-keyboard" class="pad">
			<li class="btn" v-for="(key, id) in keyboardL" :class="key.class" :data-id="id" @mousedown="activeBtn($event)" @mouseup="unActiveBtn($event)">{{key.text}}</li>
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
						text: "²",
						class: "weight-1h ",
					},
					{
						text: "&",
					},
					{
						text: "é",
					},
					{
						text: '"',
					},
					{
						text: "'",
					},
					{
						text: "(",
					},
					{
						text: "-",
					},
					{
						text: "è",
					},
					{
						text: "_",
					},
					{
						text: "ç",
					},
					{
						text: "à",
					},
					{
						text: ")",
						class: "",
					},
					{
						text: "=",
						class: "",
					},
					{
						text: "backarrow",
						class: "weight-1h ",
					},
					{
						text: "tab",
						class: "weight-2 ",
					},
					{
						text: "a",
					},
					{
						text: "z",
					},
					{
						text: "e",
					},
					{
						text: "r",
					},
					{
						text: "t",
					},
					{
						text: "y",
					},
					{
						text: "u",
					},
					{
						text: "i",
					},
					{
						text: "o",
					},
					{
						text: "p",
					},
					{
						text: "^",
						class: "",
					},
					{
						text: "$",
						class: "",
					},
					{
						text: "*",
						class: "",
					},
					{
						text: "caps",
						class: "weight-2h ",
					},
					{
						text: "q",
					},
					{
						text: "s",
					},
					{
						text: "d",
					},
					{
						text: "f",
					},
					{
						text: "g",
					},
					{
						text: "h",
					},
					{
						text: "j",
					},
					{
						text: "k",
					},
					{
						text: "l",
					},
					{
						text: "m",
					},
					{
						text: "ù",
						class: "",
					},
					{
						text: "enter",
						class: "weight-1h ",
					},
					{
						text: "shift",
						class: "weight-3",
					},
					{
						text: "w",
					},
					{
						text: "x",
					},
					{
						text: "c",
					},
					{
						text: "v",
					},
					{
						text: "b",
					},
					{
						text: "n",
					},
					{
						text: ",",
					},
					{
						text: ";",
					},
					{
						text: ":",
					},
					{
						text: "!",
					},
					{
						text: "shift",
						class: "weight-2",
					},
					{
						text: "ctrl",
						class: "weight-ab",
					},
					{
						text: "windows",
						class: "weight-ab ",
					},
					{
						text: "alt",
						class: "weight-ab",
					},
					{
						text: "space",
						class: "weight-space",
					},
					{
						text: "<",
						class: "weight-ab ",
					},
					{
						text: "alt gr",
						class: "weight-ab ",
					},
					{
						text: "fn",
						class: "weight-ab ",
					},
					{
						text: "ctrl",
						class: "weight-ab",
					},
				],
				keyboardR: [
					{
						text: "verr",
						class: "",
					},
					{
						text: "/",
					},
					{
						text: "*",
					},
					{
						text: "-",
					},
					{
						text: "7",
					},
					{
						text: "8",
					},
					{
						text: "9",
					},
					{
						text: "+",
						class: "weight-v ",
					},
					{
						text: "4",
					},
					{
						text: "5",
					},
					{
						text: "6",
					},
					{
						text: "enter",
						class: "weight-v ",
					},
					{
						text: "1",
					},
					{
						text: "2",
					},
					{
						text: "3",
					},
					{
						class: "",
					},
					{
						text: "0",
						class: "weight-2 ",
					},
					{
						text: ".",
						class: "",
					},
					{
						class: "",
					},
				],
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
            colorBtns() {
                var btns = document.querySelectorAll("li.btn");
                // If guitar
                if (true) {
                    for (let b of btns) {
                        switch (parseInt(b.dataset.id)) {
                            case 1:
                            case 2:
                            case 15:
                            case 16:
                            case 29:
                            case 30:
                            case 42:
                            case 43:
                                b.classList.add("chord-6");
                                break;
                            case 3:
                            case 4:
                            case 17:
                            case 18:
                            case 31:
                            case 32:
                            case 44:
                            case 45:
                                b.classList.add("chord-5");
                                break;
                            case 5:
                            case 6:
                            case 19:
                            case 20:
                            case 33:
                            case 34:
                            case 46:
                            case 47:
                                b.classList.add("chord-4");
                                break;
                            case 7:
                            case 8:
                            case 21:
                            case 22:
                            case 35:
                            case 36:
                            case 48:
                            case 49:
                                b.classList.add("chord-3");
                                break;
                            case 9:
                            case 10:
                            case 23:
                            case 24:
                            case 37:
                            case 38:
                            case 50:
                            case 51:
                                b.classList.add("chord-2");
                                break;
                            case 11:
                            case 12:
                            case 25:
                            case 26:
                            case 27:
                            case 39:
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
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	
	.pad {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin: 10px;
	}
	
	#left-keyboard {
		width: inherit;
	}
	
	#right-keyboard {
		width: 7rem;
	}
	
	.btn {
		align-items: center;
		background: #363636;
		border: solid 1px white;
		border-radius: 3px;
		display: flex;
		font-size: .75rem;
		height: 1.5rem;
		justify-content: center;
		list-style: none;
		margin: .05rem;
		width: 1.4rem;
	}
	
	.weight-1h {
		width: 2.15rem;
	}
	
	.weight-2 {
		width: 2.9rem;
	}
	
	.weight-2h {
		width: 3.65rem;
	}
	
	.weight-3 {
		width: 4.4rem;
	}
	
	.weight-3h {
		width: 5.15rem;
	}
	
	.weight-ab {
		width: 1.9rem;
	}
	
	.weight-space {
		width: 8.4rem;
	}
	
	.weight-v {
/*		height: 2.9rem;*/
	}
    
    /* Guitar */
    .chord-6 {
		background: hsl(15, 64%, 55%);
	}
    .chord-5 {
		background: hsl(355, 50%, 47%);
	}
    .chord-4 {
		background: hsl(335, 50%, 62%);
	}
    .chord-3 {
		background: hsl(315, 50%, 47%);
	}
    .chord-2 {
		background: hsl(135, 50%, 47%);
	}
    .chord-1 {
		background: hsl(70, 60%, 45%);
	}
    
    
	.special {
        background: hsl(200, 50%, 47%);
    }
    
	.disabled {
		opacity: .5;
	}
	
	.active {
		background: red;
	}
	
    .test {
        color: green;
        background: blue;
    }
</style>