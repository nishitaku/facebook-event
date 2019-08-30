<template>
  <div class="count">
    <h1>This is count page</h1>
    {{ showCounter }}
    <button @click="increment">+</button>
    <button @click="incrementAsync">++</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Count extends Vue {
  public increment() {
    this.$store.commit('increment');
  }

  public decrement() {
    this.$store.commit('decrement');
  }

  public incrementAsync() {
    this.$store.dispatch('incrementAsync');
  }

  public get showCounter() {
    return this.$store.getters.countWithSuffix;
  }
}
</script>
