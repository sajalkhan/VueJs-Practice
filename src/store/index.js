import Vuex from "vuex";

const store = new Vuex.Store({
  state: {
    isLoggedIn: false,
    isOpenLoginModal: false,
    authUser: {},
  },
  mutations: {
    setIsLoggedIn(state, payload) {
      state.isLoggedIn = payload;
    },
    setLoginModal(state, payload) {
      state.isOpenLoginModal = payload;
    },
    setAuthUser(state, payload) {
      state.authUser = payload;
    },
  },
});

export default store;
