<template>
  <div class="count">
    <h1>This is count page</h1>
    {{ showCounter }}
    <button class="button is-primary" @click="increment">+</button>
    <button class="button is-secondary" @click="incrementAsync">++</button>
    <button class="button is-danger" @click="decrement">-</button>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

import { counterModule } from '@/store/modules/counter';

@Component
export default class Count extends Vue {
  public increment() {
    counterModule.increment();
  }

  public decrement() {
    counterModule.decrement();
  }

  public incrementAsync() {
    counterModule.incrementAsync();
  }

  public get showCounter() {
    return counterModule.countWithSuffix;
  }
}
</script>
