import axios from 'axios';
import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule
} from 'vuex-module-decorators';

import { StatusConfig } from '@/config/Status';
import store from '@/store/store';

export interface INicknameState {
  getStatus: StatusConfig;
  nickname: string;
}

@Module({ dynamic: true, store, name: 'counter', namespaced: true })
class Nickname extends VuexModule implements INicknameState {
  // state
  status = StatusConfig.INITIALIZED;
  nickname: string = 'aaaaa';

  // getters
  get getNicknameRowStr() {
    return this.nickname;
  }

  get getStatus() {
    return this.status;
  }

  // mutations
  @Mutation
  public getNicknameM(iNickname: INicknameState) {
    this.nickname = iNickname.nickname;
  }

  @Mutation
  private setStatusLoading() {
    this.status = StatusConfig.LOADING;
  }

  @Mutation
  private setStatusLoaded() {
    this.status = StatusConfig.LOADED;
  }

  // actions
  @Action
  public async getNickname() {
    this.setStatusLoading();
    axios.get('http://localhost:4321/profile_wait').then(response => {
      if (response.status === 200) {
        this.getNicknameM(response.data);
      }
      this.setStatusLoaded();
    });
  }
}

export const nicknameModule = getModule(Nickname);
