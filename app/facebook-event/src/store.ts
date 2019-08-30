import Vue from 'vue';
import Vuex, { ActionTree, MutationTree } from 'vuex';

Vue.use(Vuex);

interface State {
  count: number;
}

const state: State = {
  count: 5
};

const getters = {
  countWithSuffix: (state: State) => {
    return `${state.count} 回`;
  }
};

const mutations: MutationTree<State> = {
  increment: state => state.count++,
  decrement: state => state.count--,
  add: (state, data: number) => (state.count += data)
};

const actions: ActionTree<State, State> = {
  increment: ({ commit }) => {
    commit('increment');
  },
  dcrement: ({ commit }) => {
    commit('decrement');
  },
  incrementAsync: async ({ commit }) => {
    setTimeout(() => {
      commit('increment');
    }, 3000);
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
