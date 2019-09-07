<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item>
        <router-link to="/">Home</router-link>
      </b-navbar-item>
      <b-navbar-item>
        <router-link to="/about">About</router-link>
      </b-navbar-item>
      <b-navbar-item>
        <router-link to="/count">Count</router-link>
      </b-navbar-item>
      <b-navbar-item>
        <router-link to="/form">Form</router-link>
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <router-link to="/signup" class="button is-primary">
            <strong>Sign up</strong>
          </router-link>
          <router-link to="/signin" class="button is-light">
            Sign in
          </router-link>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>
