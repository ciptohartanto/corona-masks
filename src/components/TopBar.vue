<template lang="pug">
	.topBar
		.topBar-left
			h1 {{translate.message}}
			.topBar-inputGroup
				input.topBar-input(:placeholder="translate.inputPlaceholder" v-model="keyword")
				button.topBar-button(@click="getKeyword") 搜尋
			select(v-model="selectedCounty" @change="getSelectedCounty")
				option(default selected disabled value='') {{translate.selectCounty}}
				option(v-for="(data, index) in countyData" :value="data" :key="index") {{data}}
			select(v-model="selectedTown" @change="getSelectedTown")
				option(default selected disabled value='') {{translate.selectTown}}
				option(v-for="(data, index) in townData" :value="data" :key="index") {{data}}

			//- button(@click="getUserPosition") My Position





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
    },
    countyData: {
      type: Array,
      default: () => []
		},
		townData: {
      type: Array,
      default: () => []
		},

  },
  data() {
    return {
      keyword: "",
      current: {
        long: null,
        lat: null
			},
			selectedCounty: '臺北市',
			selectedTown: '內湖區',
			translate: {
				selectTown: '地區',
				selectCounty: '城市',
				inputPlaceholder: '地址',
				message: 'hi!'
			}
    };
	},

  methods: {
    getKeyword() {
      this.$emit("gotKeyword", this.keyword);
		},
		getSelectedCounty(){
			this.keyword = ''
			this.$emit('gotSelectedCounty', this.selectedCounty)
		},
		getSelectedTown(){
			this.keyword = ''
			this.$emit('gotSelectedTown', this.selectedTown)
		}
    // getUserPosition() {
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(pos => {
    //       this.current.long = pos.coords.longitude;
    //       this.current.lat = pos.coords.latitude;
    //     });
    //   }
    //   this.$emit("emitUserPosition", [this.current.long, this.current.lat]);
    // }
  }
};
</script>

<style lang="sass">
.topBar
	position: fixed
	left: 10%
	right: 10%
	top: 0
	height: 150px
	background-color: white
  box-shadow: 2px 0 3px rgba(black,.4)
	z-index: 1000
	padding: 24px
	&-item
		color: black
	&-inputGroup
		display: flex
	&-input
		background: rgba(grey, .3)
		height: 32px
		display: flex
		justify-content: center
		align-items: center
		padding: 0 8px
		width: 100%
		&:placeholder-shown
			& + .topBar-button
				background-color: grey
	&-button
		height: 32px
		width: 100px
		padding: 0 24px
		display: flex
		justify-content: center
		align-items: center
		background-color: green
		color: white
		
</style>