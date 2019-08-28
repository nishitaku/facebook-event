<template>
  <button @click="onClick">Reset</button>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component
export default class ResetButton extends Vue {
  public initialValue!: string;

  /** モデルバインドのために記述必須 */
  @Prop()
  public value!: string;

  /** モデルバインドのために記述必須 */
  @Emit()
  public input(value: string) {}

  /** ライフサイクルフック */
  public created() {
    this.initialValue = this.value;
  }

  public onClick() {
    this.input(this.initialValue);
  }
}
</script>
