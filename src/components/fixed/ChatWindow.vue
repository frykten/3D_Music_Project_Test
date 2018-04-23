<template lang="html">
	<section id="chat" :class="{hidden: isHidden}">
	    <div id="arrow">
	    	<div @click="showChat()">
				<icon :name='arrow' scale="5"></icon>
	    	</div>
	    </div>
	    
	    <section id="content">
			<header id="header">
				<h2>Chat</h2>
			</header>

			<div id="messages">
				<div class="msg" v-for="m in messages"><p class="msg-user">{{m.user}}: </p><p class="msg-text">{{m.txt}}</p><p class="msg-time">{{m.time}}</p></div>
			</div>

			<div id="footer">
				<input type="text" placeholder="Message here">
				<button><icon name='check'></icon></button>
			</div>
	    </section>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				isHidden: true,
				arrow: "chevron-right",
                messages: [
                    {
                        user: "fry",
                        txt: "Smurfies!",
                        time: "16:25"
                    },
                    {
                        user: "myn",
                        txt: "Squirrels!",
                        time: "16:26"
                    },
                ]
			}
		},
		methods: {
			showChat() {
				this.isHidden = !this.isHidden;
				this.arrow = this.isHidden ? "chevron-right" : "chevron-left";
			}
		}
	}
</script>

<style lang="scss" scoped>
	#chat {
		background-color: rgba(211, 211, 211, 0.4);
		bottom: 6vh;
		height: 22rem;
		position: absolute;
		width: 15rem;
	}

	.hidden {
		left: -15rem;
	}

	#arrow {
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
		right: -1.75em;
	}

	#content {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		color: white;
	}

	#header {
		padding: .5em;
		font-size: 1.2rem;
		border-bottom: solid 1px white;
		border-bottom-right-radius: 7px;
	}

	#messages {
		margin: auto;
		padding: 10px 5px;
		width: 90%;
		height: inherit;
	}
    
    .msg {
        display: grid;
        grid-template-columns: 50px 1fr 35px;
        line-height: 1rem;
    }

    .msg-user {
        font-size: 1rem;
    }
    
    .msg-text, .msg-time {
        font-size: .75rem;
    }

	#footer {
		display: flex;
		width: 100%;
		height: 1.5rem;
	}

	#chat input {
		padding-left: 10px;
		width: 90%;
		border: 0;
	}

	#chat button {
		width: 10%;
		border: 0;
	}
</style>
