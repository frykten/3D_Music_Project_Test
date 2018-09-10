import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    instrument: "smurfinstr?",
    volume: 100
  },
  getters: {
    instrument: state => state.instrument,
    volume: state => state.volume,
  },
  mutations: {
    setInstrument(state, newInstrument) {
      state.instrument = newInstrument
    },
    setVolume(state, newVolume) {
      state.volume = newVolume
    },
  }
})
