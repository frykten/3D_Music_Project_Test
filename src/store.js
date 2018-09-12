import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profile: null,

    instrument: null,
    volume: 100
  },
  getters: {
    profile: state => state.profile,
    instrument: state => state.instrument,
    volume: state => state.volume,
  },
  mutations: {
    setProfile(state, newProfile) {
      state.profile = newProfile
    },
    setInstrument(state, newInstrument) {
      state.instrument = newInstrument
    },
    setVolume(state, newVolume) {
      state.volume = newVolume
    },
  }
})
