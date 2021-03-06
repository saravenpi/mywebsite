import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Projects from "./views/Projects";
import Skills from "./views/Skills";
Vue.use(Router);


const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      props: false
    },
    {
      path: "/skills",
      name: "skills",
      component: Skills,
      props: false
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
      props: false
    }
  ]
});

export default router;
