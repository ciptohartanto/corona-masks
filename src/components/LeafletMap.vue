<template lang="pug">
  #mapid
    l-map(
      @update:zoom='updateZoom'
      :zoom="zoom"
      :center="center"
      style="width: 100%; height: 100vh;"
      )
      l-tile-layer(:url="url" :attribution='attribution')
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
              .popup-stackUp
                span.popup-addressSubtitle {{location.properties.address}}
                span.popup-addressSubtitle {{location.properties.phone}}
              .popup-mainInfo
                .popup-wrapp
                  span.popup-addressIcon
                    include ./../assets/medical-mask.svg
                  span.popup-addressCaption 成人: {{location.properties.mask_adult}}
                .popup-wrapp
                  span.popup-addressIcon
                    include ./../assets/mask.svg
                  span.popup-addressCaption 兒童: {{location.properties.mask_child}}
          l-icon(
            :icon-url='icon'
            :icon-size="iconSize"
          )
</template>

<script>
import L from 'leaflet'
import { LMap, LTileLayer, LMarker, LIcon, LPopup } from 'vue2-leaflet'
import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster'
import pin from '../assets/marker.png'

export default {
  name: 'LeafletMap',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    L,
    'v-marker-cluster': Vue2LeafletMarkerCluster,
    LPopup
  },
  data() {
    return {
      url:
        'https://api.maptiler.com/maps/bright/256/{z}/{x}/{y}@2x.png?key=9oeahMFWIODM5nvypMGz',
      attribution:
        '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',

      icon: pin,
      iconSize: [35, 35],
      iconBig: [100, 100],
      clusterOptions: {
        disableClusteringAtZoom: 17
      }
    }
  },
  computed: {
    locations() {
      return this.$store.state.newArr
    },
    center() {
      return this.$store.state.center
    },
    zoom() {
      return this.$store.state.zoom
    }
  },
  methods: {
    getLatLong(lat, long) {
      return L.latLng(lat, long)
    },
    updateZoom(zoom) {
      this.$store.commit('updateCurrentZoom', zoom)
    }
  }
}
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
    font-size: 22px
    margin-bottom: 18px
    font-weight: bold
    display: block
  &-addressSubtitle
    font-size: 18px
    display: block
  &-addressIcon
    display: flex
    width: 24px
    height: 24px
    align-items: center
    justify-content: center
    margin-right: 8px
  &-addressCaption
    font-size: 16px
    font-weight: bold
  &-wrapp
    display: flex
    width: 45%
  &-mainInfo
    margin-top: 20px
    display: flex
    justify-content: space-between


// resetting UI
.leaflet-popup-content-wrapper
  border-radius: 0 !important
.leaflet-popup
  bottom: 10px !important
.leaflet-popup-content
  margin: 24px !important
  @media screen and (max-width: 450px)
    width: 320px !important
    max-width: 80% !important
</style>
