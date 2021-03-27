import Vue from 'vue'
import App from './App.vue'
import Utils from './utils/resume-utils';
import VueScrollTo from 'vue-scrollto';

Vue.config.productionTip = false
Vue.use(Utils);
Vue.use(VueScrollTo)

new Vue({
  render: h => h(App),
}).$mount('#app')
