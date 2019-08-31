import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule
} from 'vuex-module-decorators';

import store from '@/store/store';

export interface ICounterState {
  count: number;
}

@Module({ dynamic: true, store, name: 'counter', namespaced: true })
class Counter extends VuexModule implements ICounterState {
  // state
  count: number = 5;

  // getters
  get countWithSuffix() {
    return `${this.count} 回`;
  }

  // mutations
  @Mutation
  public increment() {
    this.count++;
  }

  @Mutation
  public decrement() {
    this.count--;
  }

  @Mutation
  public add(data: number) {
    this.count += data;
  }

  // actions
  @Action
  public async incrementAsync() {
    setTimeout(() => {
      this.increment();
    }, 5000);
  }
}

export const counterModule = getModule(Counter);
