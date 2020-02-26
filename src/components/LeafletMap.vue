<template lang="pug">
#mapid
	h1 center {{center}}
	//- h2 marker: {{marker}}
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
		v-marker-cluster(:options='clusterOptions')
			l-marker(
				v-for="(location, index) in locations"
				:key="index"
				:lat-lng="getLatLong(location.geometry.coordinates[1], location.geometry.coordinates[0])"
				@click=" getMarkerIndex(index)"
				)
				l-popup
					address.popup-address
						span.popup-addressTitle {{location.properties.name}}
						.popup-stackU
							span.popup-addressSubtitle {{location.properties.address}}
							span.popup-addressSubtitle {{location.properties.phone}}
							
						.popup-stackOn
							span.popup-addressCaption {{location.properties.mask_adult}}
							span.popup-addressCaption {{location.properties.mask_child}}
				l-icon(
					:icon-url='icon'
					:icon-size="iconSize"
					)
</template>

<script>
import L from "leaflet";
import { LMap, LTileLayer, LMarker, LIcon, LPopup } from "vue2-leaflet";
import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster'
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
    L,
		'v-marker-cluster': Vue2LeafletMarkerCluster,
		LPopup
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

      icon: pin,
      iconSize: [35, 35],
      iconBig: [100, 100],
      clusterOptions: {
        disableClusteringAtZoom: 17,
      },
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
			console.log('from leafletMap zoom: ' + zoom)
    },
    updateCenter(center) {
			this.$emit("updateNewCenter", center);
			console.log('from leafletMap center: ' + center)
		}
	},
	computed: {
			popupContent(){
			const popupContent = `
				<h1> address: ${this.location.properties.mask_adult} </h1>
				<h2> mask for children: ${this.location.properties.mask_child} </h2>
			`
			return popupContent
		}
	}
};
</script>

<style lang="sass">
@import "~leaflet.markercluster/dist/MarkerCluster.css";
@import "~leaflet.markercluster/dist/MarkerCluster.Default.css";
.icon--big
	width: 75px
	height: 75px
	

.popup
	&-address
		font-style: normal
	&-addressTitle
		font-size: 18px
		font-weight: bold
	&-addressSubtitle
		font-size: 14px
		
		
		
// resetting UI
.leaflet-popup-content-wrapper
	border-radius: 0 !important
.leaflet-popup
	bottom: 10px !important
</style>