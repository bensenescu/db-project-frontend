<template>
  <router-view
    v-on:userSignIn="setUser($event)"/>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      user: {},
    };
  },
  methods: {
    setUser(user) {
      this.user = user;
    },
  },
};
</script>
<style lang="less">
</style>
