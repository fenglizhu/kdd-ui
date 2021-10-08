import Vue from 'vue'
import App from './App.vue'
import './assets/icon/iconfont.css'

import KddUI from './index.js'
Vue.use(KddUI)

// let {KddButton,KddLink} = KddUI
// Vue.use(KddButton)
// Vue.use(KddLink)




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
