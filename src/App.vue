<template>
  <div id="app">
    <nav-bar :profile="profile"></nav-bar>
	
    <view-button></view-button>
   
    <chat-window></chat-window>

    <three-container :instrument="instrument"></three-container>

    <router-view @profile="profile = $event"/>
	
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import NavBar from './components/fixed/NavBar.vue'
import ViewButton from './components/fixed/ViewButton.vue'
import ChatWindow from './components/fixed/ChatWindow.vue'
import FooterBar from './components/fixed/Footer.vue'

import ThreeContainer from './components/fixed/ThreeContainer.vue'

export default {
  name: 'App',
  data() {
      return {
          instrument: null,
          profile: null
      }
  },
  components: {
    NavBar,
    ViewButton,
    ChatWindow,
    FooterBar,
    ThreeContainer,
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
    width: 100vw;
    height: 100vh;
    margin: 0;
    font-family: sans-serif;
    color: lightgray;
    background-color: #111;
    overflow: hidden;
    text-align: center;
}

#page {
    margin: 10vh;
}
</style>
