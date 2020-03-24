<template>
  <b-list-group>
    <b-list-group-item v-for="section in sections" :key="section.sectionId">
      <p>{{section.sectionId}}</p>
      <p>{{section.courseId}}</p>
      <p>{{section.meetingtimes}}</p>
      <p v-if="section.finalDate">{{section.finalDate}}</p>
      <p>{{section.blackboardUrl}}</p>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import api from '../services/api';

export default {
  name: 'home',
  data() {
    return {
      sections: [],
    };
  },
  async created() {
    this.sections = await this.getSections();
  },
  methods: {
    getSections: async () => {
      const { data } = await api.getSections();
      return data.results;
    },
  },
};
</script>

<style lang="less" scoped>

</style>
