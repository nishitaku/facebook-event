<template>
  <div class="section">
    <div class="columns">
      <div class="column is-one-third is-offset-one-third">
        <div class="card">
          <div class="card-content">
            <b-field
              label="Usename"
              type="is-success"
              message="This username is available"
            >
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
            <a class="card-footer-item">Sign Up</a>
          </footer>
        </div>
      </div>
    </div>
    <router-link to="/signin">サインイン</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SignUp extends Vue {
  usename = '';
  password = '';
}
</script>

<style lang="scss" scoped></style>
