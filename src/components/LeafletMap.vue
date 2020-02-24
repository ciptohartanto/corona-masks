<template lang="pug">
#mapid
	l-map(
		@update:center="updateCenter"
		@update:zoom='updateZoom'
		:zoom="zoom"
		:center="center"
		style="width: 100%; height: 100vh;"
		)

		l-tile-layer(:url="url" :attribution='attribution')
		//- l-marker(
		//- 	v-if="isUser===true"
		//- 	:lat="userLat"
		//- 	:long="userLong"
		//- 	lat-lng="userLatLong(userLat,userLong)"
		//- 	@click=" getMarkerIndex(index)"
		//- 	)
		//- 	l-icon(
		//- 		:icon-url='icon'
		//- 		:icon-size='iconBig'
		//- 		)
		l-marker(
			v-for="(location, index) in locations"
			:key="index"
			:lat-lng="getLatLong(location.geometry.coordinates[1], location.geometry.coordinates[0])"
			@click=" getMarkerIndex(index)"
			)
			l-icon(
				:icon-url='icon'
				:icon-size="iconSize"
				)
</template>

<script>
import L from "leaflet";
import { LMap, LTileLayer, LMarker, LIcon } from "vue2-leaflet";
import { Icon } from "leaflet";
import pin from "./../assets/marker.png";
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
    LIcon,
    L
  },
  props: {
    locations: {
      type: Array,
      default: () => []
    },
    zoom: {
      type: Number,
      default: () => 0
    },
    center: {
      type: Object,
      default: () => {}
    },
    isUser: {
      type: Boolean,
      default: () => false
    },
    userLat: {
      type: Number,
      default: () => null
    },
    userLong: {
      type: Number,
      default: () => null
    }
  },
  data() {
    return {
      url:
        "https://api.maptiler.com/maps/bright/256/{z}/{x}/{y}@2x.png?key=9oeahMFWIODM5nvypMGz",
      attribution:
        '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
      marker: L.latLng(25.04776, 121.53185),
      icon: pin,
      iconSize: [35, 35],
      iconBig: [100, 100]
    };
  },
  methods: {
    getLatLong(lat, long) {
      return L.latLng(lat, long);
    },
    userLatLong(lat, long) {
      return L.latLng(lat, long);
    },
    getMarkerIndex(index) {
      this.$emit("markerIndex", index);
    },
    updateZoom(zoom) {
      this.$emit("updateNewZoom", zoom);
    },
    updateCenter(center) {
      this.$emit("updateNewCenter", center);
    }
  }
};
</script>

<style lang="sass">
.icon--big
	width: 75px
	height: 75px
</style>