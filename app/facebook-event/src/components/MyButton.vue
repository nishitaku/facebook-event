<template>
  <button class="primary" @click="onClick"><slot></slot></button>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component
export default class MyButton extends Vue {
  private count = 0;

  @Prop()
  public greet?: string;

  @Emit()
  public clicked(count: number) {}

  public onClick() {
    alert(this.greet);
    this.count++;
    this.clicked(this.count);
  }
}
</script>
