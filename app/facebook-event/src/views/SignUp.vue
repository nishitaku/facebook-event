<template>
  <div class="section">
    <div class="columns">
      <div class="column is-one-third is-offset-one-third">
        <div class="card">
          <div class="card-content">
            <b-field label="Username">
              <b-input
                placeholder="Username"
                maxlength="30"
                v-model="usename"
              ></b-input>
            </b-field>
            <b-field label="Password">
              <b-input
                type="password"
                placeholder="Password"
                v-model="password"
                password-reveal
              >
              </b-input>
            </b-field>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item" @click="signUp">Sign Up</a>
          </footer>
        </div>
      </div>
    </div>
    <div class="signin">
      <router-link to="/signin">サインイン</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import firebase from 'firebase';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SignUp extends Vue {
  usename = '';
  password = '';

  public signUp() {
    console.log(`Username=${this.usename}`);
    console.log(`Password=${this.password}`);
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.usename, this.password)
      .then(response => {
        alert(`Created Account: ${response.user.email}`);
      })
      .catch(error => {
        alert(error.message);
      });
  }
}
</script>

<style lang="scss" scoped>
.signin {
  text-align: center;
}
</style>
