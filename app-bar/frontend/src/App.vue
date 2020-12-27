<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/profile" v-if="!$auth.loading && $auth.isAuthenticated">Profile</router-link> |
      <a href="#" @click="login" v-if="!$auth.loading && !$auth.isAuthenticated">Login</a> 
      <a href="#" @click="logout" v-if="!$auth.loading && $auth.isAuthenticated">Logout</a>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    async login(e) {
      e.preventDefault();
      await this.$auth.loginWithRedirect();
    },

    logout(e) {
      e.preventDefault();
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
