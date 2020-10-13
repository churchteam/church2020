import store from "@utils/store/cookie";

const state = {
  footer: true,
  home: true,
  homeActive: false,
  backgroundColor: "#fff",
  userInfo: null
};

const mutations = {
  SHOW_FOOTER(state) {
    state.footer = true;
  },
  HIDE_FOOTER(state) {
    state.footer = false;
  },
  SHOW_HOME(state) {
    state.home = true;
  },
  HIDE_HOME(state) {
    state.home = false;
  },
  OPEN_HOME(state) {
    state.homeActive = true;
  },
  CLOSE_HOME(state) {
    state.homeActive = false;
  },
 
  BACKGROUND_COLOR(state, color) {
    state.color = color;
    document.body.style.backgroundColor = color;
  },
  UPDATE_USERINFO(state, userInfo) {
    state.userInfo = userInfo;
  }
  // GET_STORE(state, storeItems) {
  //   state.storeItems = storeItems;
  //   store.set("storeItems", storeItems);
  // },
  // GET_TO(state, goName) {
  //   state.goName = goName;
  //   store.set("goName", goName);
  // }
};

export default {
  state,
  mutations
};
