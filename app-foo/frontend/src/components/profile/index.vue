<template>
    <div id="app">
        <h3>
            Profile
        </h3>
        <section>
            <div>
                <div>
                <img :src="$auth.user.picture">
                <h2>{{ $auth.user.name }}</h2>
                <p>{{ $auth.user.email }}</p>
                </div>

                <pre>{{ JSON.stringify($auth.user, null, 2) }}</pre>

                <h3>Token</h3>
                <pre>{{ JSON.stringify(this.token, null, 2) }}</pre>
            </div>
        </section>
    </div>
</template>
    
<script>

export default {
    name: 'Profile',
    data() {
        return {
            token: null
        }
    },
    async mounted() {
        this.token = await this.$auth.getTokenSilently();
    },
}

</script>

<style>
pre {
  text-align: left;
  background: #f6f8fa;
  padding: 16px;
  font-size: 85%;
  border-radius: 6px;
  width: fit-content;
  margin: 0 auto;
}
</style>