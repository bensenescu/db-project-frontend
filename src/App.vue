<template>
  <div>
    <the-nav v-if="user.email" :isProfessor="user.professorCollege ? true : false" />
    <router-view v-on:userSignIn="setUser($event)" class="main-content" :user="user"/>
  </div>
</template>

<script>
import TheNav from './TheNav.vue';

export default {
  name: 'app',
  components: {
    TheNav,
  },
  data() {
    return {
      user: {},
    };
  },
  watch: {
    user() {
      if (!this.user) {
        this.$router.push('/');
      }
    },
  },
  methods: {
    setUser(user) {
      console.log(user);
      this.user = user;
    },
  },
};
</script>
<style lang="less">
.main-content {
  max-width: 60em;
  margin: auto;
  padding: 4em;
}
</style>
