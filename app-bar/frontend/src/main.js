import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Auth0Plugin } from "@/auth";
import { domain, clientId } from "../auth_config.json";

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

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
