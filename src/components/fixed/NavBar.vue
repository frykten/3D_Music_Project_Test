<template lang="html">
	<nav id="nav-bar">
		<router-link to="/">
			<div class="logo parts">
				<img id="logo-img" src="/static/logos/jfg_logo.png" alt="">
				<p>Great Fire's Jam Session</p>
			</div>
		</router-link>

			<div id="search" class="search parts">
				<div id="search-bar">
<!--					<input type="text" id="search-input">-->
					<div id="search-placeholder">
<!-- Empty until V1 -->
					</div>

					<ul id="search-dropdown-container" class="dropdown">
						<li class="dropdown-li search-dropdown-li" v-for="i in instruments" @click="emitInstrument(i)">
							<router-link to="/view" @click="emitInstrument(i)">
								<p class="search-dropdown-li-text">{{i.name}}</p>
							</router-link>

						</li>
					</ul>

					<icon name="bars" id="search-menu"></icon>
				</div>

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
				<div id="profile" class="parts mini-parts">
					<button id="profile-btn" @click="onYouClick()">
						<icon name="circle"></icon>
						<div class="mini-parts-row">
							<p v-if="isLogged">{{username}}</p>
							<p v-else><router-link to="/login">Log In</router-link></p>
							<icon name="caret-down"></icon>
						</div>
					</button>
					<ul id="profile-dropdown" ref="profileDropdown" class="dropdown dropdown-profile you signed">
<!--
						<li class="dropdown-li">
							<a href="">See profile</a>
						</li>
-->
<!--
						<li class="dropdown-li">
							<a href="">Settings?</a>
						</li>
-->
						<li class="profile-dropdown-li">
							<a href="" @click="unsubscribe()">Unsuscribe</a>
						</li>
						
						<li class="profile-dropdown-li">
							<a href="" @click="signOut()">Sign Out</a>
						</li>
					</ul>
				</div>
			</div>
		</router-link>
	</nav>
</template>

<script>
	const axios = require('axios');
	import { EventBus } from '../../eventBus.js';
	
	export default {
		data() {
			return {
				instruments: [],
        selectedInstr: null,
				
				username: null,
				isLogged: false,
			}
		},
		computed: {
			instrument: function () {
				return this.$store.getters.instrument
			}
		},
		props: ["profile"],
    methods: {
      onChange(){
        console.log(event.target.value);
        console.log(this.selected);
      },
      emitInstrument(i){
			  this.$store.commit('setInstrument', i);
      },
      signOut() {
        this.username = null;
      },
      unsubscribe() {
	      axios.delete('http://localhost:3000/userdel', {
		      params: { username: this.username }
	      })
	      .then((res) => {
                    this.username = null;
	      }).catch((err) => {
		      console.error(err.response);
	      });
      }
    },
    mounted() {
      axios.get('http://localhost:3000/instr')
        .then((res) => {
                    this.instruments = res.data;
        }).catch((err) => {
	        console.error(err.response);
        });
    },
    watch: {
      selectedInstr(v) {
          this.$emit("sel-instr", v);
      },
      profile() {
	      this.username = this.profile;
      },
      username() {
	      this.isLogged = this.username ? true : false;
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
        max-width: 30vw;
		min-width: 15rem;
        width: 30rem;
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
	select {
		height: 100%;
		width: 100%;
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

	#search-bar:hover #search-dropdown-container {
		display: flex;
		flex-direction: column
	}

	#search-dropdown-container {
		margin-top: 2.25rem;
	}

	.search-dropdown-li {
		background: #EEE;
		border-bottom: solid 1px rgba(25, 25, 25, .25);
		height: 1.6rem;
		line-height: 1.6rem;        
		max-width: 30vw;
		min-width: 15rem;
		text-align: center;
    width: 30rem;
	}

	.search-dropdown-li .search-dropdown-li-text {
    color: #333;
  }
	
	#menu {
		border-left: solid 1px lightgray;
		padding-left: .5rem;
		margin-left: auto;
	}
	
	.menus > .parts {
		margin: .2rem .5rem;
	}
	
	.dropdown {
		display: none;
		list-style: none;
		position: absolute;
		z-index: 1000;
	}

	#profile-dropdown {
		background: #6d6d6d;
		border-radius: 2px;
		box-shadow: 5px 0px 10px rgba(10,20,20,0.4), 0 10px 16px rgba(10,15,15,0.4);
		margin-top: 9vh;
		right: .5rem;
		top: 0;
		width: 5rem;
	}
	
	#profile:hover #profile-dropdown {
		display: flex;
		flex-direction: column
	}
	
	.profile-dropdown-li {
		padding: 1rem;
		word-wrap: break-word;
	}
	
	.profile-dropdown-li:not(:last-child) {
		border-bottom: solid 1px lightgrey;
	}
	
	button {
		background: rgba(0,0,0,0);
		border: 0;
	}
</style>
