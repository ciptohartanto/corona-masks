<template lang="pug">
  .topBar(:class="`${isPopupContext === true ? '' : 'topBar--isClosed'}`")
    .topBar-intro(v-if="isPopupContext !== true")
      button.topBar-button2(@click="setIsPopupContext") Show Settings Panel
    .topBar-context(v-else)
      .topBar-close(@click="setIsPopupContext")
        include ./../assets/close.svg
      .topBar-top
        h1.topBar-title
          | {{translate.message}}
          br
          | 今天是{{todayDate}}

        h2.topBar-caption
          | Let's combat Coronavirus!
          br
          | This simple app will help you get masks for you and your beloved ones!
      .topBar-bottom

        .topBar-bottomSection
          h3.topBar-subtitle Store Locator
          .topBar-radioGroup
            .topBar-theradio
              input.topBar-radio(name="searchBy" type='radio' v-model='searchBy' value="selectionAddress")
              label.topbar-caption 選項

            .topBar-theradio
              input.topBar-radio(name="searchBy" type='radio' v-model='searchBy' value="manualAddress")
              label.topbar-caption 填寫地址

          .topBar-inputGroup(v-if="searchBy === 'manualAddress'")
            input.topBar-input(type="text" :placeholder="translate.inputPlaceholder" v-model="keyword")
            button.topBar-button(@click="getKeyword(); setIsPopupContext()") 搜尋

          .topBar-selectGroup(v-if="searchBy === 'selectionAddress'")
            select.topBar-select(v-model="selectedCounty" @change="getSelectedCounty")
              option(default selected disabled value='') {{translate.selectCounty}}
              option(v-for="(data, index) in countyData" :value="data" :key="index") {{data}}
            select.topBar-select(v-model="selectedTown" @change="getSelectedTown(); setIsPopupContext()")
              option(default selected disabled value='') {{translate.selectTown}}
              option(v-for="(data, index) in townData" :value="data" :key="index") {{data}}

        .topBar-bottomSection
          h3.topBar-subtitle Mask Type
          .topBar-radioGroup
            .topBar-theradio
              input.topBar-radio(name="maskTypes" type='radio' v-model='maskType' value="allMaskTypes" @change="setMaskTypes")
              label.topbar-caption 成人與兒童用的

            .topBar-theradio
              input.topBar-radio(name="maskTypes" type='radio' v-model='maskType' value="childrenMaskType" @change="setMaskTypes")
              label.topbar-caption 兒童用的


        //- button(@click="getUserPosition") My Position

</template>

<script>
export default {
  name: 'TopBar',
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
    }
  },
  data() {
    return {
      keyword: '',
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
        message: '哈囉!'
      },
      searchBy: 'selectionAddress',
      maskType: 'allMaskTypes',
      isPopupContext: true
    }
  },
  computed: {
    todayDate() {
      const dates = [
        '星期日',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六'
      ]
      return dates[new Date().getDay()]
    }
  },

  methods: {
    getKeyword() {
      this.isPopup = false
      this.$emit('gotKeyword', this.keyword)
    },
    getSelectedCounty() {
      this.keyword = ''
      this.$emit('gotSelectedCounty', this.selectedCounty)
    },
    getSelectedTown() {
      this.keyword = ''
      this.isPopup = false
      this.$emit('gotSelectedTown', this.selectedTown)
    },
    setMaskTypes() {
      this.$emit('gotMaskType', this.maskType)
    },
    setIsPopupContext() {
      this.isPopupContext = !this.isPopupContext
    }
  }
}
</script>

<style lang="sass">
.topBar
  position: fixed
  left: 20%
  right: 20%
  top: 10px
  background-color: white
  box-shadow: 2px 2px 20px rgba(black, .8)
  z-index: 1000
  padding: 24px
  border-radius: 8px
  @media screen and (max-width: 767px)
    left: 18px
    right: 18px
    top: 50%
    transform: translateY(-50%)
  &-item
    color: black
  &-inputGroup
    display: flex
  &-title
    display: block
    width: 100%
  &-input
    background: rgba(grey, .3)
    display: flex
    justify-content: center
    align-items: center
    padding: 10px 8px
    width: 100%
    border-radius: 4px 0 0 4px
    &:placeholder-shown
      & + .topBar-button
        background-color: grey
  &-button
    width: 100px
    padding: 10px 24px
    display: flex
    justify-content: center
    align-items: center
    background-color: green
    color: white
    border: none
    appearance: none
    border-radius: 0 4px 4px 0
  &-select
    border: none
    display: inline-block
    border-radius: 0
    height: 34px
    margin-right: 20px
    padding: 10px 12px
    max-width: 150px
    width: 50%
    background-color: rgba(grey, .3)

  &-top


  &-caption
    font-size: 18px
    font-weight: normal
    margin-bottom: 20px

  &-radio
    border: 1px solid green
    width: 15px
    height: 15px
    position: relative
    outline: none
    border-radius: 0
    background-color: transparent
    &:checked
      border: 1px solid green
      &:after
        content: ''
        width: 10px
        height: 6px
        border-radius: 3px
        background-color: red
        position: absolute
        top: 50%
        right: 0
        bottom: 0
        left: 50%
        transform: translateX(-50%) translateY(-50%)

  &-theradio
    display: flex
    width: 200px
  &-radioGroup
    display: flex
    justify-content: flex-start
    margin-bottom: 10px
  &-bottom
    display: flex
    justify-content: flex-start
    @media screen and (max-width: 767px)
      flex-direction: column
  &-bottomSection
    width: 50%
    flex-shrink: 0
    margin-right: 9px
    @media screen and (max-width: 767px)
      width: 100%
      margin-bottom: 20px
    &:last-child
      margin-right: 0
      margin-left: 9px
      margin-bottom: 0

  &-subtitle
    margin-bottom: 10px
    position: relative
    &:after
      content: ''
      position: absolute
      left: 0
      bottom: 2px
      height: 2px
      width: 30px
      background-color: red

  &-selectGroup
    display: flex
  &-close
    width: 32px
    height: 32px
    position: absolute
    right: 18px
    top: 18px
  &-button2
    appearance: none
    border: none
    width: 100%
    padding: 10px 20px
    background-color: green
    color: white
  &--isClosed
    animation: hideShow linear forwards .5s
    transition: .3s animation ease-in-out
    top: 10px
    left: 30%
    right: 30%
    transform: translateY(0)
    @media screen and (max-width: 767px)
      top: auto
      bottom: 10px
      left: 20%
      right: 20%
@keyframes hideShow
  0%
    opacity: 100%
    transform: translateY(0)

  50%
    opacity: 0%
    transform: translateY(-50px)
  100%
    opacity: 100%
    transform: translateY(0)
</style>
