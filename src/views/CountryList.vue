<template>
  <div>
    <div v-for="country in activeCountries" :key="country.code">
      <div>
        <router-link :to="`/countries/${country.name}`">{{
          country.name
        }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CountryList',
  data() {
    // eslint-disable-next-line no-array-constructor

    return {
      countryInfo: [],
      openIndex: 'null',
    }
  },
  methods: {
    /* countryButton() {
      if (this.isCountryInfo) {
        this.isCountryInfo = false
      } else {
        this.isCountryInfo = true
      }
    }, */
    moveDetailPage(index) {},
  },
  computed: {
    activeCountries: function() {
      return this.countryInfo.filter(function(country) {
        return country.name !== null
      })
    },
  },
  mounted() {
    // const countryName = this.$route.params.cityName
    axios.get('/api/countries').then(res => {
      this.countryInfo = res.data
    })
  },
}
</script>
