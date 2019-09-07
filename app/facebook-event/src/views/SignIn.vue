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
            <a class="card-footer-item" @click="signIn">Sign In</a>
          </footer>
        </div>
      </div>
    </div>
    <div class="signup">
      <router-link to="/signup">登録する</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import firebase from 'firebase';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SignIn extends Vue {
  usename = '';
  password = '';

  public signIn() {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.usename, this.password)
      .then(
        response => {
          alert('Login Success !');
          this.$router.push('/');
        },
        err => {
          alert(err.message);
        }
      );
  }
}
</script>

<style lang="scss" scoped>
.signup {
  text-align: center;
}
</style>
