<template lang='pug'>
  #app
    //- input(placeholder="Keyword" v-model="keyword")
    //- button(@click="showArea") Click
    //- button(@click="getCurrentPosition") My Position

    leaflet-map(
      :locations="this.newArr"
    )
    bottom-bar
</template>

<script>
import axios from "axios";
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
      newArr: []
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
    getCurrentPosition() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
          this.current.long = pos.coords.longitude;
          this.current.lat = pos.coords.latitude;
        });
      }
    },

    getZhongshan() {
      const locations = this.locations;
      const newArr = locations.filter(location => {
        return location.properties.address.includes("中山區");
      });
      this.newArr = newArr;
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
#mapid
  height: 100%
</style>
