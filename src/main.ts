
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css
import router from './router'
import store from './store'
import './permission' // permission control
import Icon from 'vue-svg-icon/Icon.vue'


Vue.use(ElementUI)
Vue.component('icon', Icon)
Vue.config.productionTip = false


let v = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})




