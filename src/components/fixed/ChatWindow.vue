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

            <div id="messages" ref="messagesContainer">
                <div class="msg" v-for="m in messages"><p class="msg-user">{{m.user}}: </p><p class="msg-text">{{m.txt}}</p><p class="msg-time">{{m.time}}</p></div>
            </div>

            <div id="footer">
                <input type="text" placeholder="Message here" @keyup.enter="sendMessage" v-model="message">
                <button @click="sendMessage"><icon name='check'></icon></button>
            </div>
	    </section>
	</section>
</template>

<script>
    import io from 'socket.io-client';

	export default {
		data() {
			return {
				isHidden: true,
				arrow: "chevron-right",
                messages: [
                ],

				isConnected: false,
				socketMessage: '',

                user: 'Anon',
                message: '',
                socket: io('localhost:3000')
			}
		},
        computed: {
          profile: function() {
            return this.$store.getters.profile
          }
        },
        watch: {
          profile() {
            if (this.profile)
              this.user = this.profile.username;
            else
              this.user = 'Anon';
          }
        },
		methods: {
			showChat() {
				this.isHidden = !this.isHidden;
				this.arrow = this.isHidden ? "chevron-right" : "chevron-left";
			},
            sendMessage(e) {
              e.preventDefault();
              
              let date = new Date();
              let hoursMinutes = date.getHours() + ":" + date.getMinutes();
              
              this.socket.emit('SEND_MESSAGE', {
                user: this.user,
                txt: this.message,
                time: hoursMinutes
              });
              this.message = '';
            }
		},
        mounted() {
          this.socket.on('MESSAGE', (data) => {
              if (data.txt)
                this.messages = [...this.messages, data];
          });
          
          this.socket.on('GOT_ERROR', (data) => {
              console.error(data);
          });
        },
        updated() {
          var container = this.$refs.messagesContainer;
          container.scrollTop = container.scrollHeight;
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
        z-index: 100;
	}

	.hidden {
		left: -15rem;
	}

	#arrow {
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: center;
		position: absolute;
		right: -1.75em;
	}

	#content {
		color: white;
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: space-between;
		width: 100%;
	}

	#header {
		border-bottom: solid 1px white;
		border-bottom-right-radius: 7px;
		font-size: 1.2rem;
		padding: .5em;
	}

	#messages {
		height: inherit;
		margin: auto;
        overflow-y: scroll;
		padding: 10px 5px;
		width: 90%;
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
		height: 1.5rem;
		width: 100%;
	}

	#chat input {
		border: 0;
		padding-left: 10px;
		width: 90%;
	}

	#chat button {
		border: 0;
		width: 10%;
	}
</style>
