<template lang="pug">
  #app
    leaflet-map
    top-bar
</template>

<script>
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
  created() {
    this.getAPI()
    document.title = 'Mask Locator - Combat Coronavirus, Taiwan!'
  },
  computed: {
    collectTowns() {
      return this.$store.getters.towns
    },
    collectCounties() {
      return this.$store.getters.counties
    },
    updateNewArr() {
      return this.$store.getters.update
    }
  },
  methods: {
    async getAPI() {
      try {
        const res = await this.getLocations()
        this.$store.commit('initLocationsArray', res)
        this.collectTowns
        this.collectCounties
        this.updateNewArr
      } catch (err) {
        console.log(err)
      }
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
