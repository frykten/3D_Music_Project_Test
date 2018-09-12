<template lang="html">
	<section id="profile">
		<h2 id="title">Profile</h2>

		<article id="inputs">
        <div v-for="(value, line) in profileToShow">
          <span class="lines">
            <p class="lines">{{line}}: {{value}}</p>
            <hr>
          </span>
        </div>
		</article>
	</section>
</template>

<script>
	const axios = require('axios');
	
	export default {
		data() {
			return {
			}
		},
    computed: {
      profile: function () {
        return this.$store.getters.profile
      },
      profileToShow: function () {
        let temp = {
          username: this.profile.username,
          email: this.profile.email,
          creation_date: this.profile.creation_date,
          profile_picture: this.profile.profile_picture_url
        }
        return temp
      }
    },
		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	#profile {
		align-items: center;
		background: linear-gradient(0deg, darkslategray, #172e2e 75%, #1c1c1c);
		box-shadow: 5px 0px 10px rgba(10,20,20,0.4), 0 10px 16px rgba(10,15,15,0.4);
		border: solid 2px white;
    color: lightgrey;
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

	.lines {
    display: inline-block;
    width: auto;
	}

	hr {
    margin: 0.5rem auto .5rem;
    width: 60%;
	}
</style>
