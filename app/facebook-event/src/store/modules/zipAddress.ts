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

export interface IZipAddressState {
  getStatus: StatusConfig;
  address: string;
  zipCode: string;
}

@Module({ dynamic: true, store, name: 'zipAddress', namespaced: true })
class ZipAddress extends VuexModule implements IZipAddressState {
  // state
  status = StatusConfig.INITIALIZED;
  address = '';
  zipCode = '';

  // getters
  get getStatus() {
    return this.status;
  }

  get getAddress() {
    return this.address;
  }

  get getZipCode() {
    return this.zipCode;
  }

  // mutations
  @Mutation
  private setStatusLoading() {
    this.status = StatusConfig.LOADING;
  }

  @Mutation
  private setStatusLoaded() {
    this.status = StatusConfig.LOADED;
  }

  @Mutation
  private setAddress(address: string) {
    this.address = address;
  }

  // actions
  @Action
  public async getAddressByZipCode(zipcode: string) {
    this.setStatusLoading();
    await axios
      .get('https://api.zipaddress.net/?', {
        params: {
          zipcode
        }
      })
      .then(response => {
        console.log(JSON.stringify(response.data));
        this.setAddress(response.data.data.fullAddress);
        this.setStatusLoaded();
      });
  }
}

export const zipAddressModule = getModule(ZipAddress);
