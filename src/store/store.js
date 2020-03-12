import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    locations: []
  },
  mutations: {
    updateLocations(state, payload) {
      state.locations = payload
    }
  },
  actions: {},
  getters: {}
})
