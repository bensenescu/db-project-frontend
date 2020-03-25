<template>
  <b-card class="container text-center" header="Sign Up:">
    <b-form v-on:submit="onSubmit">
      <b-form-group label-for="email">
        <b-form-input
          id="email"
          v-model="user.email"
          type="email"
          required
          placeholder="Email" />
      </b-form-group>
      <b-form-group label-for="name">
        <b-form-input
          id="name"
          v-model="user.name"
          type="text"
          required
          placeholder="Full Name" />
      </b-form-group>
      <b-form-group label-for="phone">
        <b-form-input
          id="phone"
          v-model="user.phone"
          type="text"
          required
          placeholder="Phone Number"/>
      </b-form-group>
      <b-button type="submit" variant="primary">Create Account</b-button>
    </b-form>
    <b-card-body>
      <b-card-text>If you already have an account, click this button to log in!</b-card-text>
      <b-button type="submit" variant="secondary" v-on:click="$emit('switchToLogin')">
        Go to Login
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
      user: {},
      error: '',
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();

      try {
        const res = await api.createUser(this.user);
        if (res.error) {
          this.error = res.error;
          // eslint-disable-next-line no-alert
          alert(`ERROR: ${res.error.sqlMessage}`);
        } else {
          this.$emit('userCreated', this.user);
          this.$router.push('/sections');
        }
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
