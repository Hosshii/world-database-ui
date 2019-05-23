<template>
  <div>
    <div v-for="(city, index) in activeCity" :key="city.name">
      <div>
        <button @click="setOpenIndex(index)">{{ city.cityname }}</button>
        <span v-if="index === openIndex">
          <p>district : {{ city.district }}</p>
          <p>name:{{ city.cityname }}</p>
          <p>population : {{ city.population }}</p>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CountryDetail',
  data() {
    return {
      cityInfo: [],
      openIndex: 'null',
    }
  },
  computed: {
    activeCity: function() {
      return this.cityInfo.filter(function(city) {
        return city.name !== null
      })
    },
  },
  methods: {
    setOpenIndex(index) {
      if (index === this.openIndex) {
        this.openIndex = 'null'
      } else {
        this.openIndex = index
      }
    },
  },
  mounted() {
    const countryName = this.$route.params.countryName

    axios.get('/api/countries/' + countryName).then(res => {
      this.cityInfo = res.data
    })
  },
}
</script>
