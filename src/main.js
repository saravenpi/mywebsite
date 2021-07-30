import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.extend()
const NotFound = { template: '<p>Page not found</p>' }
import Home from './Home.vue'
import Skills from './Skills.vue'
import Projects from './Projects.vue'
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const routes = [
  { path: '/skills', component: Skills },
  { path: '/projects', component: Projects },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#home')
