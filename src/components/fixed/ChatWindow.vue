<template lang="html">
	<section class="chat window" id="smurf">
	    <div class="arrow chat-arrow">
		<icon name='chevron-right' scale="5"></icon>
	    </div>
	    
	    <section class="content">
		<header>
		    <h2>Chat</h2>
		</header>
		
		<div class="messages">
		    <p>Smurf</p>
		</div>
		
		<footer>
		    <input type="text" placeholder="Message here">
		    <button><icon name='check'></icon></button>
		</footer>
	    </section>
	</section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.chat {
    position: absolute;
    bottom: 6vh;
    width: 15rem;
    height: 22rem;
    background-color: rgba(211, 211, 211, 0.4);
}

.chat .arrow {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    right: -2.5em;
}

.chat .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
}

.chat header {
    padding: .5em;
    font-size: 1.2rem;
    border-bottom: solid 1px white;
    border-bottom-right-radius: 7px;
}

.chat .messages {
    margin: auto;
    padding: 10px 5px;
    width: 90%;
    height: inherit;
}

.chat footer {
    display: flex;
    width: 100%;
    height: 1.5rem;
}

.chat input {
    padding-left: 10px;
    width: 90%;
    border: 0;
}

.chat button {
    width: 10%;
    border: 0;
}
</style>
