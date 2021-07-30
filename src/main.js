import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.config.productionTip = false
Vue.use(VueRouter)

const NotFound = { template: '<p>Page not found</p>' }
import Home from './Home.vue'
import Skills from './Skills.vue'
import Projects from './Projects.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/skills', component: Skills },
  { path: '/projects', component: Projects }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')
