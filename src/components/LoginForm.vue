<template>
  <b-card class="container text-center" header="Sign in:">
    <b-form v-on:submit="onSubmit">
      <b-form-group
        label-for="email">
        <b-form-input
          id="email"
          v-model="email"
          type="email"
          required
          placeholder="Email" />
      </b-form-group>
      <b-button type="submit" variant="primary">Log in</b-button>
    </b-form>
    <b-card-body>
      <b-card-text>If you don't have an account, please sign up!</b-card-text>
      <b-button type="submit" variant="secondary" v-on:click="$emit('switchToSignUp')">
        Sign Up
      </b-button>
    </b-card-body>
  </b-card>
</template>

<script>
import api from '../services/api';

export default {
  name: 'login-form',
  data() {
    return {
      email: '',
      error: '',
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      try {
        const res = await api.getUser(this.email);
        if (res.error) {
          this.error = res.error;
          // eslint-disable-next-line no-alert
          alert(`ERROR: Please sign up if you haven't created an account before.\n
            Sql Error: ${res.error.sqlMessage}`);
        } else {
          this.$emit('userSignIn', res);
          this.$router.push('/sections');
        }
        this.section = {};
      } catch (err) {
        this.error = err;
      }
    },
  },
};

</script>

<style lang="less" scoped>
.container {
  width: 40%;
}
</style>
