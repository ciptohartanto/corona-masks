<template lang='pug'>
  #app
    input(placeholder="Keyword" v-model="keyword")
    button(@click="showArea") Click
    #mapid
      l-map
        l-tile-layer(url="https://api.maptiler.com/maps/hybrid/tiles.json?key=zmkE5RpWXjHTJzZ13b9T" attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>')
        l-marker(lat-lng="[23.840123, 120.963436]" :icon="icon")
      
    
</template>

<script>
import axios from 'axios'
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet'

export default {
  name: 'App',
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data(){
    return {
      locations: [],
      keyword: '',
      newArr: []
    }
  },
  created() {
    axios.get('https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json')
      .then(res=> this.locations = res.data.features )
  },
  methods: {
    showArea() {
      const locations = this.locations
      const keyword = this.keyword
      const newArr = locations.filter(location => {
        return location.properties.address.includes(keyword)
      })
      this.newArr = newArr
    }
  }
  
}
</script>

<style lang='sass'>

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
  
#mapid
  height: 100%
</style>
