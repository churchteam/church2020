export default [
  {
    path: "/activity"
    // component: () => import("@views/home/index.vue")
  },
  {
    path: "/activity/fuyin",
    name: "FuYin",
    meta: {
      title: "福音",
      keepAlive: false,
      footer: true,
      backgroundColor: "#fff"
    },
    component: () => import("@views/activity/FuYin.vue")
  },
  {
    path: "/activity/chajing",
    name: "ChaJing",
    meta: {
      title: "查经",
      keepAlive: false,
      footer: true,
      backgroundColor: "#fff"
    },
    component: () => import("@views/activity/Chajing.vue")
  },
  {
    path: "/activity/Live",
    name: "Live",
    meta: {
      title: "日常证道",
      keepAlive: false,
      backgroundColor: "#fff"
    },
    component: () => import("@views/activity/Live.vue")
  },
  {
    path: "/activity/:id/:type?",
    name: "PlayDetails",
    meta: {
      title: "详情播放",
      keepAlive: false,
      header:false
    },
    component: () => import("@views/activity/PlayDetails.vue")
  }
];
