import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    locations: [],
    keyword: '',
    isPopup: true
  },
  mutations: {
    updateLocations(state, payload) {
      state.locations = payload
    },
    updateKeyword(state, payload) {
      state.keyword = payload
    },
    updateIsPopup(state, payload) {
      state.isPopup = payload
    }
  },
  actions: {},
  getters: {}
})
