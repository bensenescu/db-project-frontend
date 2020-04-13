<template>
  <div>
    <sections :user="user" />
  </div>
</template>

<script>
// import api from '../services/api';
import Sections from '../components/Sections.vue';

export default {
  name: 'home',
  components: {
    Sections,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  watch: {
    user: {
      immediate: true,
      handler() {
        if (!this.user.email) {
          this.$router.push('/auth');
        }
      },
    },
  },
};
</script>

<style lang="less" scoped>

</style>
