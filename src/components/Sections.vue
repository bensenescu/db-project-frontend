<template>
  <b-list-group>
    <h1 v-if="sections.length === 0">
      Please enroll in section with calendar Items.
      Go to enroll in the header.
      Once enrolled please refresh the page and sign back in.
    </h1>
    <b-list-group-item v-else v-for="section in sections" :key="section.sectionId">
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
        this.sections = await api.getSections();
      }
    },
  },
};
</script>
