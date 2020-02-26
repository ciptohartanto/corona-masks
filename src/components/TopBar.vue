<template lang="pug">
	.bottomBar
		.bottomBar-left
			h1 {{message}}


			input(placeholder="Keyword" v-model="keyword")
			button(@click="getKeyword") Click
			button(@click="getUserPosition") My Position
		//- .bottomBar-right
		//- 	ul.bottomBar-list
		//- 		li.bottomBar-item(
		//- 				v-for="(location, index) in locations"
		//- 		)
		//- 			span {{location.properties.name}}
		//- 			span {{location.properties.address}}
		//- 			span {{location.properties.phone}}
		//- 			span adult: {{location.properties.mask_adult}}
		//- 			span child: {{location.properties.mask_child}}




</template>

<script>
export default {
  name: "TopBar",
  props: {
    locations: {
      type: Array,
      default: () => []
		},
		message: {
			type: String,
			default: () => ''
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
    getUserPosition() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
          this.current.long = pos.coords.longitude;
          this.current.lat = pos.coords.latitude;
        });
      }
      this.$emit("emitUserPosition", [this.current.long, this.current.lat]);
    }
  }
};
</script>

<style lang="sass">
.bottomBar
	position: fixed
	left: 10%
	right: 10%
	top: 0
	height: 150px
	background-color: white
  box-shadow: 2px 0 3px rgba(black,.4)
	z-index: 1000
	&-item
		color: black
</style>