import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/home'
import Profile from './components/profile'
import { Auth0Plugin } from "@/auth";
import { authGuard } from "@/auth/authGuard";
import { domain, clientId } from "../auth_config.json";

Vue.use(VueRouter);

Vue.use(Auth0Plugin, {
  domain,
  client_id: clientId,
  onRedirectCallbacl: appState => {
    router.push(
      appState && appState.targetUrl ? appState.targetUrl : window.location.pathname
    );
  }
});

Vue.config.productionTip = false

const routes = [
  { path: '/home', component: Home },
  { 
    path: '/profile',
    beforeEnter: authGuard,
    component: Profile 
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach( async (to, from, next) => {
  next();
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
