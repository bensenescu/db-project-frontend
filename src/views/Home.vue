<template>
  <div>
    <sections v-if="!user.professorCollege" :user="user" />
    <sections-professor v-else :user="user" />
  </div>
</template>

<script>
// import api from '../services/api';
import Sections from '../components/Sections.vue';
import SectionsProfessor from '../components/SectionsProfessor.vue';

export default {
  name: 'home',
  components: {
    Sections,
    SectionsProfessor,
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
