import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Meta from "vue-meta";
import { time } from "@/utils/date";
import { highlight } from "@/utils/highlight";

Vue.directive("transfer-date", time);
Vue.directive("highlight", highlight);

import Cookies from "js-cookie";

import ELEMENT from 'element-ui'
import "element-ui/lib/theme-chalk/index.css";

import "@/assets/css/index.css"; // global css

import VueParticles from "vue-particles";
Vue.use(VueParticles);
Vue.use(Meta);
Vue.use(Cookies);
Vue.use(ELEMENT);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
