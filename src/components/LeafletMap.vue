<template lang="pug">
#mapid
	l-map(
		@update:zoom="updateZoom"
		@update:center="updateCenter"
		:zoom="zoom"
		:center="center"
		style="width: 100%; height: 100vh;")
		l-tile-layer(:url="url" :attribution='attribution')
		l-marker(
			v-for="(location, index) in locations"
			:key="index"
			:lat-lng="getLatLong(location.geometry.coordinates[1], location.geometry.coordinates[0])"
				)
</template>

<script>
import L from "leaflet";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import { Icon } from "leaflet";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

export default {
  name: "LeafletMap",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    L
  },
  props: {
    locations: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      current: {
        long: null,
        lat: null,
        zoom: 13,
        center: L.latLng(25.058471, 121.536856)
      },
      zoom: 14,
      center: L.latLng(25.054968, 121.537027),

      url:
        "https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=zmkE5RpWXjHTJzZ13b9T",
      attribution:
        '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
      marker: L.latLng(25.04776, 121.53185)
    };
  },
  methods: {
    getLatLong(lat, long) {
      return L.latLng(lat, long);
    },
    updateZoom(zoom) {
      this.current.zoom = zoom;
      console.log(this.current.zoom);
    },
    updateCenter(center) {
      this.current.center = center;
      console.log(this.current.center);
    }
  }
};
</script>

<style lang="sass">

</style>