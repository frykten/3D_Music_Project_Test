// Basic Vue Stuff
import Vue from 'vue'
import App from './App'
import router from './router'

// EventBus
import { EventBus } from './eventBus.js'
Vue.prototype.$ebus = EventBus
// Store
import Vuex from 'vuex'
Vue.use(Vuex)
import store from './store.js'
// Vue Session
import VueSession from 'vue-session'
Vue.use(VueSession)

// Font Awesome Use
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)

// Three.js Use
import Three from 'vue-threejs'
Vue.use(Three)

// Socket.io Use
//import socketio from 'socket.io'
//import VueSocketIO from 'vue-socket.io'
//export const SocketInstance = socketio('http://localhost:3000')
//Vue.use(VueSocketIO, 'http://localhost:3000')

// Google Maps Use
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCkPCXQNeptCoA_ThDoqakpQgN9xDTrI2Y',
    }
})

// Config
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store,
  data() {
    return {
      
    }
  },
//  created: function() { console.log(this) }
})
