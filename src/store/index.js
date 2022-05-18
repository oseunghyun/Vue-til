import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: "",
  },
  // computed와 유사
  getters: {
    isLogin(state) {
      return state.username !== "";
    },
  },
  // state를 바꿈
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state) {
      state.username = "";
    },
  },
});
