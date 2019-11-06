// import Vue from "vue";
import Vuex from "vuex";
import { fetchMasterInfo, login, getInfo, fetchConfigList } from "@/api/api";
import { getToken, setToken, removeToken } from "@/utils/auth";

// Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    masterUserInfo: null,
    userInfo: null,
    token: getToken(),
    config: null
  },
  mutations: {
    SET_MASTER_USER_INFO: (state, obj) => {
      state.masterUserInfo = obj;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo;
    },
    SET_CONFIG: (state, config) => {
      state.config = config;
    }
  },
  actions: {
    async fetchMasterInfo({ commit }) {
      const result = await fetchMasterInfo();
      if (result.success === 1) {
        commit("SET_MASTER_USER_INFO", result.model);
        return result;
      }
    },
    async getInfo({ commit, state }) {
      const result = await getInfo(state.token);
      if (result.success === 1) {
        commit("SET_USER_INFO", result.model);
        return result;
      }
    },
    async getConfigList({ commit }) {
      const result = await fetchConfigList();
      if (result.success === 1) {
        commit("SET_CONFIG", result.model);
        return result;
      }
    },
    async login({ commit, dispatch }, params) {
      const result = await login(params);
      const { model, success } = result;
      if (success === 1) {
        commit("SET_TOKEN", model.token);
        setToken(model.token);
        dispatch("getInfo");
        return result;
      }
    }
  }
});
