<template>
  <div class="scene">
    <div v-show="isLoading">
      Loading...
    </div>
    <p class="name">NICKNAME: {{ nickname }}</p>
    <input
      class="input"
      v-model="zipCode"
      placeholder="郵便番号を入力してください"
    />
    <button class="button is-primary" @click="onClickGetAddress">
      住所取得
    </button>
    <div>
      <label>住所：</label>
      {{ address }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.scene {
  font-size: 1.8rem;
  text-align: center;
  a div p {
    display: block;
    margin: 0 auto;
    height: 30pt;
  }
}
.input {
  width: 130pt;
  height: 30pt;
}
.button {
  display: block;
  position: relative;
  margin: 0 auto;
  width: 70pt;
  border: solid 1px silver;
  border-radius: 0.5rem 0.5rem;
  padding: 0.5rem 1.5rem;
  margin-top: 1rem;
  text-decoration: none;
}
</style>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

import { StatusConfig } from '@/config/Status';
import { nicknameModule } from '@/store/modules/nickname';
import { zipAddressModule } from '@/store/modules/zipAddress';

@Component
export default class Count extends Vue {
  zipCode = '';

  async created() {
    nicknameModule.getNickname();
  }

  public onClickGetAddress() {
    zipAddressModule.getAddressByZipCode(this.zipCode);
  }

  get nickname() {
    return nicknameModule.getNicknameRowStr;
  }

  get isLoading() {
    return nicknameModule.getStatus === StatusConfig.LOADING;
  }

  get address() {
    return zipAddressModule.getAddress;
  }
}
</script>
