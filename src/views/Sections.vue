<template>
  <b-list-group>
    <b-list-group-item v-for="section in sections" :key="section.sectionId">
      <p>Course: {{section.sectionId}}</p>
      <p>CRN: {{section.courseId}}</p>
      <p>Meeting Times: {{section.meetingTimes}}</p>
      <p v-if="section.finalDate">Final Date: {{section.finalDate}}</p>
      <a :href="section.blackboardUrl">Go to Blackboard</a>
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
      return data;
    },
  },
};
</script>

<style lang="less" scoped>

</style>
