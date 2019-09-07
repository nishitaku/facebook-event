<template>
  <div id="main">
    <Header></Header>
    <router-view />
  </div>
</template>

<style lang="scss">
#main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

import Header from '@/components/Header.vue';

@Component({
  components: {
    Header
  }
})
export default class Main extends Vue {}
</script>
