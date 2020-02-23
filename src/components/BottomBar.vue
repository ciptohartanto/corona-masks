<template lang="pug">
	.bottomBar
		.bottomBar-left
			input(placeholder="Keyword" v-model="keyword")
			button(@click="getKeyword") Click
			button(@click="getCurrentPosition") My Position
		.bottomBar-right
			ul.bottomBar-list
				li.bottomBar-item(
						v-for="(location, index) in locations"
				)
					span {{location.properties.name}}
					span {{location.properties.address}}
					span {{location.properties.phone}}
					span adult: {{location.properties.mask_adult}}
					span child: {{location.properties.mask_child}}




</template>

<script>
export default {
  name: "BottomBar",
  props: {
    locations: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      keyword: "",
      current: {
        long: null,
        lat: null
      }
    };
  },
  methods: {
    getKeyword() {
      this.$emit("gotKeyword", this.keyword);
    },
    getCurrentPosition() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
          this.current.long = pos.coords.longitude;
          this.current.lat = pos.coords.latitude;
        });
      }
      this.$emit("gotCurrentPosition", [this.current.long, this.current.lat]);
    }
  }
};
</script>

<style lang="sass">
.bottomBar
	position: fixed
	left: 0
	right: 0
	bottom: 0
	height: 150px
	background-color: red
	z-index: 1000
	&-item
		color: white
</style>