import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    locations: [],
    newArr: [],
    keyword: '',
    isPopup: true,
    towns: [],
    counties: [],
    selectedCounty: '臺北市',
    selectedTown: '內湖區',
    searchBy: 'selectionAddress',
    maskType: 'allMaskTypes'
  },
  mutations: {
    initLocationsArray(state, payload) {
      state.locations = payload
    },
    updateKeyword(state, payload) {
      state.keyword = payload
    },
    updateIsPopup(state, payload) {
      state.isPopup = payload
    },
    updateSelectedCounty(state, payload) {
      state.selectedCounty = payload
    },
    updateSelectedTown(state, payload) {
      state.selectedTown = payload
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
    },
    update(state) {
      const storeLocations = state.locations
      const storeKeyword = state.keyword
      const storeSelectedTown = state.selectedTown
      const storeSeectedCounty = state.selectedCounty

      const replaceTai = storeSeectedCounty.replace('臺', '台')

      const combinedKeywords = replaceTai + storeSelectedTown

      const newArr = storeLocations.filter(loc => {
        if (storeKeyword !== '') {
          return (
            loc.properties.address.includes(storeKeyword) &&
            loc.properties.mask_adult > 2 &&
            loc.properties.mask_child > 2
          )
        }
        return (
          loc.properties.address.includes(combinedKeywords) &&
          loc.properties.mask_adult > 2 &&
          loc.properties.mask_child > 2
        )
      })
      return (state.newArr = newArr)
    }
  }
})
