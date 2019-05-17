<template>
  <div>
    <input type="text" placeholder="userName" v-model="username" />
    <input type="text" placeholder="password" v-model="password" />
    <button @click="sendUserName()">send</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    sendUserName() {
      axios.post('/api/login', {
        Username: this.username,
        Password: this.password,
      })
    },
  },
}
</script>
