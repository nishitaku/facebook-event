<template>
  <div class="scene">
    <div v-show="isLoading">
      Loading...
    </div>
    <p class="name">NICKNAME: {{ nickname }}</p>
    <input class="input" placeholder="NICKNAMEを入力してください" />
    <router-link to="/count" class="button">START</router-link>
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

@Component
export default class Count extends Vue {
  async created() {
    nicknameModule.getNickname();
  }

  get nickname() {
    return nicknameModule.getNicknameRowStr;
  }

  get isLoading() {
    return nicknameModule.getStatus === StatusConfig.LOADING;
  }
}
</script>
