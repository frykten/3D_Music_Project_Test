<template lang="html">
	<section id="main">
		<ul id="left-keyboard" class="pad">
			<li class="btn" v-for="key in keyboardL" :class="key.class">{{key.text}}</li>
		</ul>
		
		<ul id="right-keyboard" class="pad">
			<li class="btn" v-for="key in keyboardR" :class="key.class">{{key.text}}</li>
		</ul>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				keyboardL: [
					{
						text: "²",
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
					},
					{
						text: "=",
					},
					{
						text: "backarrow",
						class: "weight-2",
					},
					{
						text: "tab",
						class: "weight-2",
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
					},
					{
						text: "$",
					},
					{
						text: "*",
					},
					{
						text: "caps",
						class: "weight-2",
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
					},
					{
						text: "enter",
						class: "weight-2",
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
						class: "weight-3",
					},
					{
						text: "ctrl",
						class: "weight-ab",
					},
					{
						text: "windows",
						class: "weight-ab",
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
						class: "weight-ab",
					},
					{
						text: "alt gr",
						class: "weight-ab",
					},
					{
						text: "fn",
						class: "weight-ab",
					},
					{
						text: "ctrl",
						class: "weight-ab",
					},
				],
				keyboardR: [
					{
						text: "verr",
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
						class: "weight-v",
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
						class: "weight-v",
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

					},
					{
						text: "0",
						class: "weight-2",
					},
					{
						text: ".",
					},
					{

					},
				]
			}
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
	
	.weight-2 {
		width: 2.9rem;
	}
	
	.weight-3 {
		width: 4.4rem;
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
	
</style>
