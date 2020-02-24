<template lang='pug'>
  #app
    leaflet-map(
      :locations="newArr"
      :center="current.center"
      :zoom="current.zoom"
      @markerIndex="setMarkerIndex"
      @updateNewZoom="setNewZoom"
      @updateNewCenter="setNewCenter"
      :isUser='user'
      :userLat='userPos.lat'
      :userLong='userPos.long'

    )
    bottom-bar(
      :locations="this.newArr"
      @gotKeyword="setNewKeyword"
      @emitUserPosition="setUserPosition"
    )
</template>

<script>
import axios from "axios";
import L from "leaflet";

import LeafletMap from "./components/LeafletMap";
import BottomBar from "./components/BottomBar";

export default {
  name: "App",
  components: {
    LeafletMap,
    BottomBar
  },
  data() {
    return {
      locations: [],
      keyword: "",
      newArr: [],
      current: {
        center: L.latLng(25.054968, 121.537027),
        zoom: 13
      },
      user: false,
      userPos: {
        lat: null,
        long: null
      }
    };
  },
  created() {
    axios
      .get(
        "https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json"
      )
      .then(res => {
        const data = res.data.features;
        this.locations = data;
        this.getZhongshan();
      });
  },
  methods: {
    showArea() {
      const locations = this.locations;
      const keyword = this.keyword;
      let newArr = locations.filter(location => {
        return location.properties.address.includes(keyword);
      });

      this.newArr = newArr;
    },
    getZhongshan() {
      const locations = this.locations;
      const newArr = locations.filter(location => {
        return location.properties.address.includes("中山區");
      });
      this.newArr = newArr;
    },
    setNewKeyword(keyword) {
      this.keyword = keyword;
      this.showArea();
    },
    setUserPosition(position) {
      this.current.center = L.latLng(position[1], position[0]);
      this.userPos.lat = position[1];
      this.userPos.long = position[0];

      this.current.zoom = 18;
      this.user = true;
    },
    setMarkerIndex(index) {
      const lat = this.newArr[index].geometry.coordinates[1];
      const long = this.newArr[index].geometry.coordinates[0];
      this.current.center = L.latLng(lat, long);
      this.current.zoom = 18;
    },
    setNewZoom(zoom) {
      this.current.zoom = zoom;
    },
    setNewCenter(center) {
      this.current.center = center;
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
#mapid
  height: 100%


</style>
