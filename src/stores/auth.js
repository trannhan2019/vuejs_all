import { createStore } from 'vuex';
import authApi from '../api/authApi';
import userApi from '../api/userApi';

export default createStore({
  state: {
    authStatus: false,
    user: null,
  },

  mutations: {
    SET_AUTHENTICATED(state, value) {
      state.authStatus = value;
    },
    SET_USER(state, value) {
      state.user = value;
    },
  },

  actions: {
    async login({ dispatch }, data) {
      await authApi.login();
      dispatch('user');
    },

    async logout({ commit }) {
      await authApi.logout();
      commit('SET_AUTHENTICATED', false);
      commit('SET_USER', null);
    },

    async user({ commit }) {
      await userApi
        .getUser()
        .then((result) => {
          commit('SET_AUTHENTICATED', true);
          commit('SET_USER', result.data);
        })
        .catch((err) => {
          commit('SET_AUTHENTICATED', false);
          commit('SET_USER', null);
        });
    },
  },
});
