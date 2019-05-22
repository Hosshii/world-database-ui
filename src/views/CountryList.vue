<template>
  <div>
    <div v-for="(country, index) in activeCountries" :key="country.code">
      <div>
        <button @click="setOpenIndex(index)">{{ country.name }}</button>
        <span v-if="openIndex === index">
          <p>国名 : {{ country.name }}</p>
          <p>人口 : {{ country.population }}人</p>
          <p>地域 : {{ country.region }}</p>
        </span>
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
    setOpenIndex(index) {
      if (this.openIndex === index) {
        this.openIndex = 'null'
      } else {
        this.openIndex = index
      }
    },
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
