<template>
  <div id="app">
    <nav-bar></nav-bar>

    <chat-window></chat-window>

    <three-container></three-container>

    <router-view id="page"/>

    <footer-bar></footer-bar>
  </div>
</template>

<script>
import NavBar from './components/fixed/NavBar.vue'
import ChatWindow from './components/fixed/ChatWindow.vue'
import FooterBar from './components/fixed/Footer.vue'

import ThreeContainer from './components/fixed/ThreeContainer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
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
