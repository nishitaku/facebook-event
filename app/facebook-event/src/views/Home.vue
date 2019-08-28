<template>
  <div class="home">
    <p>{{ greetText }}</p>
    <p>挨拶した回数：{{ count }}</p>
    <p v-if="isRegulars">いつもありがとうございます</p>
    <p>
      <MyButton class="mybutton" :greet="greetText" @clicked="onMyButtonClicked"
        >挨拶する</MyButton
      >
    </p>
    <p>
      <ResetButton v-model="greetText"></ResetButton>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import MyButton from '@/components/MyButton.vue';
import ResetButton from '@/components/ResetButton.vue';

@Component({
  components: {
    MyButton,
    ResetButton
  }
})
export default class Home extends Vue {
  private count = 0;
  public greetText = 'Hello';

  public get isRegulars(): boolean {
    return this.count >= 5;
  }

  @Watch('count')
  public countChanged() {
    if (this.count === 5) {
      alert('常連になりました');
    }
  }

  public onMyButtonClicked(count: number) {
    this.count = count;
    this.greetText = 'こんにちは';
  }
}
</script>
