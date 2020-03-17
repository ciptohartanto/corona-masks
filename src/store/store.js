import Vue from 'vue'
import Vuex from 'vuex'
import L from 'leaflet'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    locations: [],
    newArr: [],
    towns: [],
    counties: [],
    center: L.latLng(25.054968, 121.537027),
    zoom: 13,
    keyword: '',
    selectedCounty: '臺北市',
    selectedTown: '',
    searchBy: 'selectionAddress',
    maskType: 'allMaskTypes',
    isPopup: true,
    isWarningText: false
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
    },
    updateCurrentZoom(state, payload) {
      state.zoom = payload
    },
    updateMaskType(state, payload) {
      state.maskType = payload
    },
    updateSearchBy(state, payload) {
      state.searchBy = payload
    },
    updateIsWarningText(state, payload) {
      state.isWarningText = payload
    }
  },
  actions: {
    setInitLocationsArray(context, payload) {
      context.commit('initLocationsArray', payload)
    },
    setNewSelectedCounty(context, payload) {
      context.commit('updateSelectedCounty', payload)
    },
    setNewSelectedTown(context, payload) {
      context.commit('updateSelectedTown', payload)
    },
    setNewKeyword(context, payload) {
      context.commit('updateKeyword', payload)
    },
    setNewZoom(context, payload) {
      context.commit('updateCurrentZoom', payload)
    },
    setMaskType(context, payload) {
      context.commit('updateMaskType', payload)
    },
    setSearchBy(context, payload) {
      context.commit('updateSearchBy', payload)
    },
    setIsPopup(context, payload) {
      context.commit('updateIsPopup', payload)
    },
    setIsWarningText(context, payload) {
      context.commit('updateIsWarningText', payload)
    }
  },
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
      const mappedLocations = store.state.locations.map(loc => loc.properties.county)
      const countyList = [...new Set(mappedLocations)]
      return (state.counties = countyList.filter(x => x))
    },
    update(state) {
      const storeLocations = state.locations
      const storeKeyword = state.keyword
      const storeSelectedTown = state.selectedTown
      const storeSeectedCounty = state.selectedCounty
      const storeMaskType = state.maskType

      const replaceTai = storeSeectedCounty.replace('臺', '台')

      const combinedKeywords = replaceTai + storeSelectedTown

      const newArr = storeLocations.filter(loc => {
        if (storeKeyword !== '') {
          if (storeMaskType === 'allMaskTypes') {
            return loc.properties.address.includes(storeKeyword) && loc.properties.mask_adult > 10 && loc.properties.mask_child > 10
          } else {
            return loc.properties.address.includes(storeKeyword) && loc.properties.mask_child > 200
          }
        } else if (combinedKeywords !== '') {
          if (storeMaskType === 'allMaskTypes') {
            return loc.properties.address.includes(combinedKeywords) && loc.properties.mask_adult > 10 && loc.properties.mask_child > 10
          } else {
            return loc.properties.address.includes(combinedKeywords) && loc.properties.mask_child > 200
          }
        }
      })
      return (state.newArr = newArr)
    },
    center(state) {
      const firstLat = state.newArr[0].geometry.coordinates[1]
      const firstLong = state.newArr[0].geometry.coordinates[0]
      state.center = L.latLng(firstLat, firstLong)
    }
  }
})
