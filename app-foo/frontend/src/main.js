import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/home'
import Profile from './components/profile'

Vue.use(VueRouter);

Vue.config.productionTip = false

const isTokenValid = () => {
  return true;
}

const onlyIsUserLoggedIn = (to, from, next)  => {
  if (!isTokenValid()) next({ name: '/home' });
  else next();
}

const routes = [
  { path: '/home', component: Home },
  { 
    path: '/profile',
    beforeEnter: onlyIsUserLoggedIn,
    component: Profile 
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
