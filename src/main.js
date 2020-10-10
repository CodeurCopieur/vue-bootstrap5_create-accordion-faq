import Vue from 'vue'
import App from './App.vue'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'

import 'bootstrap/js/dist/collapse'

Vue.use(bootstrap);

Vue.config.productionTip = false

new Vue({
  bootstrap,
  render: h => h(App),
}).$mount('#app')
