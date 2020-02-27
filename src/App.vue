<template lang='pug'>
  #app
    leaflet-map(
      :locations="newArr"
      :center="current.center"
      :zoom="current.zoom"
      @markerIndex="setMarkerIndex"
      @updateNewZoom="setNewZoom"

      :isUser='user'
      :userLat='userPos.lat'
      :userLong='userPos.long'

    )
    top-bar(
      :locations="newArr"
      @gotKeyword="goToNewArea"
      :countyData='countyList'
      :townData='townList'
      :selectedCounty="selectedCounty"
      @gotSelectedCounty="setSelectedCounty"
      @gotSelectedTown="setSelectedTown"
    )
</template>

<script>
import axios from "axios";
import L from "leaflet";

import LeafletMap from "./components/LeafletMap";
import TopBar from "./components/TopBar";

export default {
  name: "App",
  components: {
    LeafletMap,
    TopBar
  },
  data() {
    return {
      locations: [],
      keyword: "",
      newArr: [],
      current: {
        center: L.latLng(25.054968, 121.537027),
        zoom: 15
      },
      user: false,
      userPos: {
        lat: null,
        long: null
      },
      countyList: [],
      townList: [],
      selectedCounty: '臺北市',
      selectedTown: '內湖區'
      
    };
  },
  created() {
    axios
      .get(
        "https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json"
      )
      .then(res => {
        const allLocations = res.data.features;
        this.locations = allLocations;
        this.extractCounties();
        this.extractTown();
        this.getTheVeryLocation();
        this.setMarkerIndex(1)
      });
  },
  methods: {
    newAreaFromKeyword() {
      const locations = this.locations;
      const keyword = this.keyword;
      const replaceTai = this.selectedCounty.replace('臺', '台')
      const selectedTown = this.selectedTown
      const combinedKeywords = replaceTai + selectedTown
      let newArr = locations.filter(location => {
        if(keyword !== '') {
          return location.properties.address.includes(keyword);
        } else {

          return location.properties.address.includes(combinedKeywords);
        }
      });
      this.newArr = newArr;
    },
    goToNewCenter() {
      const firstLat = this.newArr[0].geometry.coordinates[1];
      const firstLong = this.newArr[0].geometry.coordinates[0];
      this.current.center = L.latLng(firstLat,firstLong)
    },
    getTheVeryLocation() {
      const locations = this.locations;
      const replaceTai = this.selectedCounty.replace('臺', '台')
      const selectedTown = this.selectedTown
      const combinedKeywords = replaceTai + selectedTown
      const newArr = locations.filter(location => {
        return location.properties.address.includes(combinedKeywords)
      });

      this.newArr = newArr;
    },
    goToNewArea(keyword) {
      this.keyword = keyword;
      this.newAreaFromKeyword();
      this.goToNewCenter();

    },
    setMarkerIndex(index) {
      const lat = this.newArr[index].geometry.coordinates[1];
      const long = this.newArr[index].geometry.coordinates[0];
      this.current.center = L.latLng(lat, long);
      // this.current.zoom = 17; // problematic
    },
    setNewZoom(zoom) {
      this.current.zoom = zoom;
    },
    setNewCenter(center) {
      this.current.center = center;
    },
    extractCounties() {
      const countyArr = this.locations.map(location => location.properties.county)
      const countyList = [... new Set(countyArr)]
      this.countyList = countyList.filter(x => x)

    },
    extractTown() {
      const correctTownArr =
        this.locations.map(location => {
          if (this.selectedCounty === location.properties.county) {
            return location.properties.town
          }
        })
      const townList = [... new Set(correctTownArr)]
      this.townList = townList.filter(x => x)
    },
    setSelectedCounty(val) {
      this.selectedCounty = val
      this.keyword = ''
      this.selectedTown = ''
      this.extractTown()
      this.newAreaFromKeyword();
      this.goToNewCenter();
    },
    setSelectedTown(val){
      this.selectedTown = val
      this.keyword = ''
      this.newAreaFromKeyword();
      this.goToNewCenter();
    }
  }
};
</script>

<style lang='sass'>

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
body
  margin: 0
  padding: 0
li
  list-style: none
input,
select,
option
  appearance: none
  border: none
#mapid
  height: 100%


</style>
