<template>
  <div id="app">
    <div>
      <h1>
        @{{ user.username }} - {{ fullName }}
      </h1>
    </div>
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

        <router-link to="profile" v-slot="{ href, navigate }">
          <a 
            :href="href"
            @click="navigate"
          >
            Profile
          </a>
        </router-link>
      </nav>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    user: {
      id: 1,
      username: 'eduardocfalcao',
      firstName: 'Luis Eduardo',
      lastName: 'Falcao',
    }
  }),
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
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
  margin-top: 60px;
}

ul {
  list-style: none;
}

nav a {
  border: 1px solid rgba(67, 152, 250, 0.384);
  background-color: rgba(67, 152, 250, 0.384);;
  padding: 10px;
  color: #fff;
  text-decoration: none;
}
nav a:hover {
  font-weight: bold;
}
</style>
