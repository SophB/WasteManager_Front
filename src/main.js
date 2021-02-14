import Vue from 'vue'

// @ts-ignore
import App from '@/App.vue' 
// @ts-ignore
import vuetify from '@/plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  // @ts-ignore
  vuetify,
  render: h => h(App)
}).$mount('#app')
