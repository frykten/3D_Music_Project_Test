<template lang="html">
	<nav id="nav-bar">
		<router-link to="/">
			<div class="logo parts">
				<img id="logo-img" src="/static/logos/jfg_logo.png" alt="">
				<p>Great Fire's Jam Session</p>
			</div>
		</router-link>

			<div class="search parts">
				<div id="search-bar">
<!--					<input type="text" id="search-input">-->
                    <select name="instruments" id="search-select" v-model="selectedInstr">
                        <option value="" selected></option>
                        <option :value="i" v-for="i in instr">{{i.name}}</option>
                    </select>
					<icon name="bars" id="search-menu"></icon>
				</div>
<!--				<button class="search-puts" v-for="i in instr" ref="search">{{i}}</button>-->
				<button id="search-submit" ref="submit">
					<icon name="search" id="search-icon"></icon>
				</button>
			</div>

		<router-link to="/">
			<div id="menu" class="menus parts">
				<div class="parts mini-parts">
					<icon name="envelope"></icon>
					<p>Contact</p>
				</div>
				<div class="parts mini-parts">
					<icon name="edit"></icon>
					<p>Contrib</p>
				</div>
				<div class="parts mini-parts">
					<icon name="calendar-alt"></icon>
					<p>News</p>
				</div>
				<div class="parts mini-parts">
					<icon name="circle"></icon>
					<div class="mini-parts-row">
						<p>You</p>
						<icon name="caret-down"></icon>
					</div>
				</div>
			</div>
		</router-link>
	</nav>
</template>

<script>
	const axios = require('axios');
	
	export default {
		data() {
			return {
				instr: [],
                selectedInstr: null
			}
		},
        methods: {
            onChange(){
                console.log(event.target.value);
                console.log(this.selected);
            }
        },
		mounted() {
			axios.get('http://localhost:3000/instr')
				.then((res) => {
                    this.instr = res.data;
				}).catch((err) => {
					console.error(err);
				});
		},
        updated() {
            
        },
        watch: {
            selectedInstr(v) {
                this.$emit("sel-instr", v);
                console.log(v);
            }
        },
	}
</script>

<style lang="scss" scoped>
	#nav-bar {
		align-items: center;
		background: linear-gradient(0deg, darkslategray, #172e2e 75%, #1c1c1c);
		box-shadow: 5px 0px 10px rgba(10,20,20,0.4), 0 10px 16px rgba(10,15,15,0.4);
		display: flex;
		height: 9vh;
		justify-content: space-between;
		padding: 0.5rem;
		position: fixed;
		width: 100vw;
		z-index: 100;
	}
	
	a, p {
		color: white;
		text-decoration: none;
	}
	
	.parts {
		align-items: center;
		display: flex;
		justify-content: center;
		height: 100%;
	}
	
	.mini-parts {
		flex-direction: column;
		font-size: .8rem;
	}
	
	.mini-parts-row {
		align-items: center;
		display: flex;
		justify-content: center;
	}
	
	.logo {
		font-size: 1.5rem;
	}

	#logo-img {
		image-rendering: -moz-crisp-edges;
		image-rendering: -o-crisp-edges;
		image-rendering: -webkit-optimize-contrast;
		-ms-interpolation-mode: nearest-neighbor;
		image-rendering: pixelated;
		width: 2.5rem;
		margin: 0 .5rem;
	}
	
	#search-bar {
		align-items: center;
		background: white;
		color: black;
		display: flex;
		height: 1.6rem;
		justify-content: center;
		margin-left: 1rem;
		min-width: 15rem;
        width: 30rem;
        max-width: 30vw;
	}
	
	#search-input {
		border: 0;
		font-size: 1rem;
		outline: 0;
		padding: 0 .5rem; 
		min-width: 13.5rem;
	}
    .search-puts {
        border: 0;
        height: 1.6rem;
		font-size: 1rem;
		min-width: 13.5rem;
		outline: 0;
		padding: 0 .5rem;
/*        position: absolute;*/
    }
	
	#search-menu {
		margin-left: auto;
		width: 1.6rem;
	}
	
	#search-submit {
		align-content: center;
		background: skyblue;
		border: 0;
		display: flex;
		height: 1.6rem;
		justify-content: center;
		width: 1.6rem;
	}
	
	#menu {
		border-left: solid 1px lightgray;
		padding-left: .5rem;
		margin-left: auto;
	}
	
	.menus > .parts {
		margin: .2rem .5rem;
	}
</style>
