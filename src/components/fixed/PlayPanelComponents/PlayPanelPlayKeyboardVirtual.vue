<template lang="html">
	<section id="main">
		<ul id="left-keyboard" class="pad">
			<li class="btn" v-for="(key, id) in keyboardL" :class="key.class" :data-id="id" @mousedown="activeBtn($event)" @mouseup="unActiveBtn($event)">{{key.text}}</li>
		</ul>
		
		<ul id="right-keyboard" class="pad">
			<li class="btn" v-for="key in keyboardR" :class="key.class" @mousedown="activeBtn($event)" @mouseup="unActiveBtn($event)">{{key.text}}</li>
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
						class: "weight-1h disabled",
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
						class: "disabled",
					},
					{
						text: "=",
						class: "disabled",
					},
					{
						text: "backarrow",
						class: "weight-1h disabled",
					},
					{
						text: "tab",
						class: "weight-2 disabled",
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
						class: "disabled",
					},
					{
						text: "$",
						class: "disabled",
					},
					{
						text: "*",
						class: "disabled",
					},
					{
						text: "caps",
						class: "weight-2h disabled",
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
						class: "disabled",
					},
					{
						text: "enter",
						class: "weight-1h disabled",
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
						class: "weight-ab disabled",
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
						class: "weight-ab disabled",
					},
					{
						text: "alt gr",
						class: "weight-ab disabled",
					},
					{
						text: "fn",
						class: "weight-ab disabled",
					},
					{
						text: "ctrl",
						class: "weight-ab",
					},
				],
				keyboardR: [
					{
						text: "verr",
						class: "disabled",
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
						class: "weight-v disabled",
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
						class: "weight-v disabled",
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
						class: "disabled",
					},
					{
						text: "0",
						class: "weight-2 disabled",
					},
					{
						text: ".",
						class: "disabled",
					},
					{
						class: "disabled",
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
		}
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