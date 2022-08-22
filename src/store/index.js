import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      count: 1,
    };
  },
  // 在 Vuex 中，你可以使用 getters 配置，来实现 computed 的功能，比如我们想显示累加器数字乘以 2 之后的值，那么我们就需要引入 getters 配置。
  getters: {
    double(state) {
      return state.count * 2;
    },
  },
  mutations: {
    add(state) {
      state.count++;
    },
  },
  // actions 配置，这个配置中所有的函数，可以通过解构获得 commit 函数。内部的异步任务完成后，就随时可以调用 commit 来执行 mutations 去更新数据。
  actions: {
    async asyncAdd({ commit }) {
      const { data } = await homeBaseData();
      commit("add", data.articleCount);
    },
  },
});
