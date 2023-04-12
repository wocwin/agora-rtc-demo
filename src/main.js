import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Tui from '@wocwin/t-ui'
import ElementUI from 'element-ui' // element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'// element-ui的css
import AgoraRtcVue from 'agora-rtc-vue'
import 'agora-rtc-vue/lib/agora-rtc-vue.css'

Vue.use(AgoraRtcVue, {
  appid: '09d2682bec254d8ebbb384c8ba0ac764' // Your App ID
  // token: 'null' // Your temp token
})
Vue.use(ElementUI) // 使用elementUI

Vue.use(Tui)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
