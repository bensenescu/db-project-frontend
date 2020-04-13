<template>
  <div>
    <the-nav v-if="user.email" :isProfessor="user.professorId ? true : false" />
    <router-view v-on:userSignIn="setUser($event)" :user="user"/>
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
  methods: {
    setUser(user) {
      console.log(user);
      this.user = user;
    },
  },
};
</script>
<style lang="less">
</style>
