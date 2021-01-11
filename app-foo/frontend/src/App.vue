<template>
  <div id="app">
    <div>
      <nav>
        <router-link to="home" v-slot="{ href, navigate }">
          <a 
            :href="href"
            @click="navigate"
          >
            Home
          </a>
        </router-link>

        <router-link to="profile" v-slot="{ href, navigate }" v-if="!$auth.loading && $auth.isAuthenticated">
          <a 
            :href="href"
            @click="navigate"
          >
            Profile
          </a>
        </router-link>


          <a class="logout" v-if="!$auth.loading && !$auth.isAuthenticated"
            @click="login"
          >
            Login
          </a>

          <a class="logout" v-if="!$auth.loading && $auth.isAuthenticated"
            @click="logout"
          >
            Logout
          </a>
      </nav>
    </div>
    <div>
      <h1>
        Foo Application
      </h1>
    </div>    
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    async login() {
      await this.$auth.loginWithRedirect();
    },

    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    }
  },
  async created() {
    await this.$auth.checkSession();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style: none;
}

nav a {
  background-color: rgba(67, 152, 250, 0.384);;
  padding: 10px;
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
  margin-left: 4px;
}
nav a:hover {
  font-weight: bold;
}

nav a.logout {
  cursor: pointer;
  background-color: #6c757d;
  border:
}
</style>
