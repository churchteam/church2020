import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import animate from "animate.css";
import $scroll from "@utils/loading";
import $ from "jquery";

import "@assets/iconfont/iconfont";
import "@assets/iconfont/iconfont.css";
// import "@assets/js/media_750";
import "vue-ydui/dist/ydui.base.css";
import "@assets/css/base.css";
import "@assets/css/style.css";

Vue.use(animate);
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.config.devtools = process.env.NODE_ENV !== "production";

Vue.prototype.$scroll = $scroll;

const $vm = new Vue({
  router,
  store,
  render: h => h(App)
});

setTimeout(() => {
  $vm.$mount("#app");
}, 300);
