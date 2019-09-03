import axios from 'axios';
import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule
} from 'vuex-module-decorators';

import store from '@/store/store';

export interface INicknameState {
  nickname: string;
}

@Module({ dynamic: true, store, name: 'counter', namespaced: true })
class Nickname extends VuexModule implements INicknameState {
  // state
  nickname: string = 'aaaaa';

  // getters
  get nicknameRowStr() {
    return this.nickname;
  }

  // mutations
  @Mutation
  public getNicknameM(iNickname: INicknameState) {
    this.nickname = iNickname.nickname;
  }

  // actions
  @Action
  public async getNickname() {
    axios.get('http://localhost:4321/profile_wait').then(response => {
      if (response.status === 200) {
        this.getNicknameM(response.data);
      }
    });
  }
}

export const nicknameModule = getModule(Nickname);
