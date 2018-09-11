<template lang="html">
	<div>
		<section id="register">
			<h2 id="title">Register</h2>

			<article id="inputs">
					<input type="text" ref="email" name="logemail" placeholder="email" required="" v-model="email">
					<hr>
					<input type="text" ref="username" name="logusername" placeholder="username" required="" v-model="username">
					<hr>
					<input type="text" ref="password" name="logpassword" placeholder="password" required="" v-model="password">
					<hr>
					<input type="text" ref="passwordConf" name="logpasswordConf" placeholder="confirm password" required="" v-model="passwordConf">
					<hr>

					<button @click="register()">Submit</button>
			</article>

			<router-link to="/login"><p>Already have an account?</p></router-link>
		</section>
	</div>
</template>

<script>
	const axios = require('axios');
	const qs = require('qs');
	
	export default {
		data() {
			return {
				email: null,
				username: null,
				password: null,
				passwordConf: null,
				
				isConf: false
			}
		},
		methods: {
			conf() {
				return this.password === this.passwordConf ? true : false;
			},
			register() {
				if (!this.conf())
					return;

				axios.post('http://localhost:3000/register', {
					email: this.email,
					username: this.username,
					password: this.password
				}).then((response) => {
					console.log(response);
					console.log(response.data._id);
					this.$emit("profile", response.data.username);
				}).catch((error) => {
					console.error(error.response);
				});
			},
		},
	}
</script>

<style lang="scss" scoped>
	#register {
		align-items: center;
		background: linear-gradient(0deg, darkslategray, #172e2e 75%, #1c1c1c);
		box-shadow: 5px 0px 10px rgba(10,20,20,0.4), 0 10px 16px rgba(10,15,15,0.4);
		border: solid 2px white;
		display: flex;
    flex-direction: column;
		height: 50%;
		justify-content: space-around;
    margin: 0 33vw;
		padding: 0.5rem;
		position: fixed;
		top: 25%;
		width: 34vw;
		z-index: 100;
	}
	
	* {
		color: lightgrey
	}
	
	button {
		background: hsl(200, 50%, 37%);
		border: solid 3px rgba(221, 221, 221, 0.75);
		border-radius: 3px;
		margin-top: 1rem;
		padding: .2rem;
	}
	
	input {
		color: black;
	}
</style>
