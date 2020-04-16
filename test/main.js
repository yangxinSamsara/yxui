import Vue from 'vue'
import App from './App.vue'
import YxButton from '../pakages/button'
Vue.use(YxButton)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
