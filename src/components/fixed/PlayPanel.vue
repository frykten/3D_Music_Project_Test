<template lang="html">
  <div>
	<section class="play-panel" v-if="isLoaded">
	    <h2 class="play-title">Play</h2>
	    
	    <section class="instrument">
		<button class="keys"></button>
		<button class="fret"></button>
		<button class="keyboard"></button>
	    </section>
	    
	    <section class="modifiers">
		<button class="play"></button>
		<button class="fx"></button>
	    </section>
	    <button class="play">Play</button>
	</section>
	<section class="play-panel" v-else>
	    <h2 class="loading">Loading</h2>
	    <icon name="cog" scale="3" class="cog" spin></icon>
	    <button class="play" @click="init()">Play</button>
	</section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoaded: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.play-panel {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    right: 0;
    bottom: 0;
    width: 20vw;
    height: 88vh;
    background-color: rgba(211, 211, 211, 0.4);
}
.play-panel {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    right: 0;
    width: 20vw;
    height: 88vh;
    background-color: rgba(211, 211, 211, 0.4);
}

/*
.cog {
    animation: spin 4000ms infinite linear;
}

@keyframes spin { 
    from { 
        transform: rotate(0deg); 
    } to { 
        transform: rotate(360deg); 
    }
}
*/
</style>
