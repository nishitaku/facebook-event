import Vue from 'vue';
import Vuex from 'vuex';

import { ICounterState } from '@/store/modules/counter';
import { INicknameState } from '@/store/modules/nickname';

Vue.use(Vuex);

export interface State {
  counter: ICounterState;
  nickname: INicknameState;
}

export default new Vuex.Store<State>({});
