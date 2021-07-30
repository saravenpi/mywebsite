import Vue from 'vue'
import Home from './Home.vue'
import Skills from './Skills.vue'
import Projects from './Projects.vue'
Vue.config.productionTip = false



const NotFound = { template: '<p>Page not found</p>' }


const routes = {
  '/': Home,
  '/skills': Skills,
  '/projects': Projects
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})
