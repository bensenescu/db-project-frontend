<template>
  <div>
    <login-form
      v-if="state == 'login'"
      v-on:switchToSignUp="state = 'sign-up'"
      v-on:userSignIn="$emit('userSignIn', $event)" />
    <sign-up-form
      v-else
      v-on:switchToLogin="state = 'login'"
      v-on:userCreated="$emit('userSignIn', $event)" />
  </div>
</template>

<script>
// import api from '../services/api';
import LoginForm from '../components/forms/LoginForm.vue';
import SignUpForm from '../components/forms/SignUpForm.vue';

export default {
  name: 'home',
  components: {
    LoginForm,
    SignUpForm,
  },
  data() {
    return {
      state: 'login', // state is either login or sign-up
    };
  },
};
</script>

<style lang="less" scoped>

</style>
