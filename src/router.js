import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/home.vue")
    },
    {
      path: "/article/:id(\\d+)",
      name: "article",
      component: () => import("./views/article.vue")
    },
    {
      path: "/archives",
      name: "archives",
      component: () => import("./views/archives.vue")
    },
    {
      path: "/link",
      name: "link",
      component: () => import("./views/link.vue")
    },
    {
      path: "/tags",
      name: "tags",
      component: () => import("./views/tags.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/login.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/about.vue")
    }
  ]
});
