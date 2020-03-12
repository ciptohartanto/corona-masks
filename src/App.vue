<template lang="pug">
  #app
    leaflet-map(
      :locations="newArr"
      :center="current.center"
      :zoom="current.zoom"
      @markerIndex="setMarkerIndex"
      @updateNewZoom="setNewZoom"
    )
    top-bar(
      :locations="newArr"
      @gotKeyword="goToNewArea"
      :countyData='countyList'
      :townData='townList'
      :selectedCounty="selectedCounty"
      @gotSelectedCounty="setSelectedCounty"
      @gotSelectedTown="setSelectedTown"
      @gotMaskType='setMaskType'
    )
</template>

<script>
import L from 'leaflet'
import LeafletMap from './components/LeafletMap.vue'
import TopBar from './components/TopBar.vue'
import { locationsMixin } from './mixins/locations'

export default {
  name: 'App',
  components: {
    LeafletMap,
    TopBar
  },
  mixins: [locationsMixin],
  data() {
    return {
      keyword: '',
      newArr: [],
      current: {
        center: L.latLng(25.054968, 121.537027),
        zoom: 15
      },
      countyList: [],
      townList: [],
      selectedCounty: '臺北市',
      selectedTown: '內湖區',
      maskType: 'allMaskTypes'
    }
  },
  created() {
    this.getAPI()
    this.extractCounties()
    this.extractTown()
    this.getTheVeryLocation()
    this.setMarkerIndex(1)
    document.title = 'Mask Locator - Combat Coronavirus, Taiwan!'
  },
  computed: {
    locations() {
      return this.$store.state.locations
    }
  },
  methods: {
    async getAPI() {
      try {
        const res = await this.getLocations()
        this.$store.commit('updateLocations', res.data.features)
      } catch (err) {
        console.log(err)
      }
    },
    newAreaFromKeyword() {
      const { locations } = this
      const { keyword } = this
      const replaceTai = this.selectedCounty.replace('臺', '台')
      const { selectedTown } = this
      const combinedKeywords = replaceTai + selectedTown
      const newArr = locations.filter(location => {
        if (keyword !== '') {
          return (
            location.properties.address.includes(keyword) &&
            location.properties.mask_adult > 2 &&
            location.properties.mask_child > 2
          )
        }
        return (
          location.properties.address.includes(combinedKeywords) &&
          location.properties.mask_adult > 2 &&
          location.properties.mask_child > 2
        )
      })
      this.newArr = newArr
    },
    goToNewCenter() {
      const firstLat = this.newArr[0].geometry.coordinates[1]
      const firstLong = this.newArr[0].geometry.coordinates[0]
      this.current.center = L.latLng(firstLat, firstLong)
    },
    getTheVeryLocation() {
      const { locations } = this
      const replaceTai = this.selectedCounty.replace('臺', '台')
      const { selectedTown } = this
      const combinedKeywords = replaceTai + selectedTown
      const newArr = locations.filter(location =>
        location.properties.address.includes(combinedKeywords)
      )

      this.newArr = newArr
    },
    goToNewArea(keyword) {
      this.keyword = keyword
      this.newAreaFromKeyword()
      this.goToNewCenter()
    },
    setMarkerIndex(index) {
      const lat = this.newArr[index].geometry.coordinates[1]
      const long = this.newArr[index].geometry.coordinates[0]
      this.current.center = L.latLng(lat, long)
      // this.current.zoom = 17; // problematic
    },
    setNewZoom(zoom) {
      this.current.zoom = zoom
    },
    setNewCenter(center) {
      this.current.center = center
    },
    extractCounties() {
      const countyArr = this.locations.map(
        location => location.properties.county
      )
      const countyList = [...new Set(countyArr)]
      this.countyList = countyList.filter(x => x)
    },
    extractTown() {
      const correctTownArr = this.locations.map(location => {
        if (this.selectedCounty === location.properties.county) {
          return location.properties.town
        }
      })
      const townList = [...new Set(correctTownArr)]
      this.townList = townList.filter(x => x)
    },
    setSelectedCounty(val) {
      this.selectedCounty = val
      this.keyword = ''
      this.selectedTown = ''
      this.extractTown()
      this.newAreaFromKeyword()
      this.goToNewCenter()
    },
    setSelectedTown(val) {
      this.selectedTown = val
      this.keyword = ''
      this.newAreaFromKeyword()
      this.goToNewCenter()
    },
    setMaskType(val) {
      this.maskType = val
      const { newArr } = this
      const newArrMaskType = newArr.filter(location => {
        if (this.maskType === 'allMaskTypes') {
          return (
            location.properties.mask_adult > 2 &&
            location.properties.mask_child > 2
          )
        }
        return location.properties.mask_child > 2
      })
      this.newArr = newArrMaskType
    }
  }
}
</script>

<style lang="sass">

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
h1,
h2,
h3,
h4,
h5,
h6
  margin: 0
  padding: 0
body
  margin: 0
  padding: 0
li
  list-style: none
input
  appearance: none
  border: none
#mapid
  height: 100%
</style>
