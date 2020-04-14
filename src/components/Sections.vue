<template>
  <b-list-group>
    <b-list-group-item v-for="section in sections" :key="section.sectionId">
      <section-ours v-on:update="setSections()" :section="section"/>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import api from '../services/api';
import SectionOurs from './Section.vue';

export default {
  name: 'sections',
  components: {
    SectionOurs,
  },
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
      if (this.user.studentId) {
        this.sections = await api.getStudentCalendarItems(this.user.studentId);
      }
    },
  },
};
</script>
