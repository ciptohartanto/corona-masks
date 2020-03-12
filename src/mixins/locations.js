import axios from 'axios'
const api =
  'https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json'

export const locationsMixin = {
  methods: {
    getLocations() {
      return axios.get(api)
    }
  }
}
