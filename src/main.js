// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 引入mint-ui
import { Swipe, SwipeItem } from 'mint-ui'
//引入mint-ui的样式
import 'mint-ui/lib/style.css'

//引入 axios
import axios from 'axios'
// 添加到原型中
Vue.prototype.$http = axios

//添加为子组件
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

Vue.config.productionTip = false
// 引入通用样式
import '@/common/styles/reset.css'
import '@/common/reset.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
