<template>
  <b-list-group>
    <h1>Choose Courses to Enroll in </h1>
    <b-list-group-item v-for="section in sections" :key="section.sectionId">
      <p>Course: {{section.sectionId}}</p>
      <p>CRN: {{section.courseId}}</p>
      <p>Meeting Times: {{section.meetingTimes}}</p>
      <p v-if="section.finalDate">Final Date: {{section.finalDate}}</p>
      <a :href="section.blackboardUrl">Go to Blackboard</a>
      <br>
      <button class="btn-primary" v-on:click="enroll(section)">Enroll</button>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import api from '../services/api';

export default {
  name: 'enroll-view',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      sections: [],
    };
  },
  async created() {
    this.setSections();
  },
  methods: {
    async setSections() {
      this.sections = await api.getSections();
    },
    async enroll(section) {
      await api.enrollInSection(section, this.user);
    },
  },
};
</script>
