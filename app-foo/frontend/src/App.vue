<template>
  <div id="app">
    @{{ user.username }} - {{ fullName }}
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
</style>
