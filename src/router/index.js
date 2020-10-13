import Vue from "vue";
import Router from "vue-router";
import module from "./module";
import Index from "@views/home/Index";
import $store from "../store";
import Loading from "@views/Loading";
import cookie from "@utils/store/cookie";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Index",
      meta: {
        title: "首页",
        keepAlive: true,
        header: true,
        backgroundColor: "#fff"
      },
      component: Index
    },
    ...module,
    {
      path: "/auth/:url",
      name: "Loading",
      meta: {
        title: " 加载中",
        keepAlive: true,
        footer: false
      },
      component: Loading
    },
    {
      path: "/userlist",
      name: "UserList",
      meta: {
        title: "信息管理",
        keepAlive: false,
        backgroundColor: "#ffffff",
        header: true,
        requireAuth:true
      },
      component: () => import("@views/UserList.vue")
    },
    {
      path: "/login",
      name: "Login",
      meta: {
        title: "登陆",
        keepAlive: false,
        backgroundColor: "#ffffff",
        isHeader: false
      },
      component: () => import("@views/Login.vue")
    }
  ]
});

const { back, replace } = router;

router.back = function() {
  this.isBack = true;
  back.call(router);
};
router.replace = function(...args) {
  this.isReplace = true;
  replace.call(router, ...args);
};
// 使用router.beforeEach注册一个全局前置守卫,判断用户是否登录
router.beforeEach((to, from, next) => {
  const CACHE_KEY = "CHURCH_USER";
	if (to.matched.some(r => r.meta.requireAuth)) {          
     //这里的requireAuth为路由中定义的 meta:{requireAuth:true}，意思为：该路由添加该字段，表示进入该路由需要登陆的
		if (cookie.has(CACHE_KEY)) {
			next();
		} else {
			next({
				path: '/login',
				query: {redirect: to.fullPath}
			})
		}
	} else {
		next();
		}
	})


export default router;
