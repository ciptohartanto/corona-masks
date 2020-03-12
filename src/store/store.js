import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    locations: [],
    keyword: '',
    isPopup: true,
    selectedCounty: '臺北市',
    selectedTown: '內湖區',
    towns: [],
    counties: []
  },
  mutations: {
    updateInitialLocationArray(state, payload) {
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
  getters: {
    towns(state) {
      const mappedLocations = store.state.locations.map(loc => {
        if (state.selectedCounty === loc.properties.county) {
          return loc.properties.town
        }
      })
      const listOfTowns = [...new Set(mappedLocations)]
      return (state.towns = listOfTowns.filter(x => x))
    },
    counties(state) {
      const mappedLocations = store.state.locations.map(
        loc => loc.properties.county
      )
      const countyList = [...new Set(mappedLocations)]
      return (state.counties = countyList.filter(x => x))
    }
  }
})
