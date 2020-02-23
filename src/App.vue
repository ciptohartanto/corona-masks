<template lang='pug'>
  #app
    leaflet-map(
      :locations="this.newArr"
      :zoom="this.current.center"
    )
    bottom-bar(
      :locations="this.newArr"
      @gotKeyword="setNewKeyword"
      @gotCurrentPosition="setCurrentPosition"
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
        center: {}
      }
    };
  },
  created() {
    axios
      .get(
        "https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json"
      )
      .then(res => {
        this.locations = res.data.features;
        this.getZhongshan();
      });
  },
  methods: {
    showArea() {
      const locations = this.locations;
      const keyword = this.keyword;
      const newArr = locations.filter(location => {
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
    setCurrentPosition(position) {
      this.current.long = position[0];
      this.current.lat = position[1];
      this.current.center = L.latLng(position[0], position[1]);
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
