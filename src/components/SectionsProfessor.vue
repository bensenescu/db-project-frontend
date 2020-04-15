<template>
  <div>
    <h1>Create you sections:</h1>
    <section-form v-on:updated="setSections" :user="user"/>
    <h2>Here are all your sections!</h2>
    <router-link to="/calendar">
      Click here to add calendar items
    </router-link>
    <b-list-group>
      <b-list-group-item v-for="section in sections" :key="section.sectionId">
        <section-ours v-on:update="setSections()" :section="section"/>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import api from '../services/api';
import SectionOurs from './Section.vue';
import SectionForm from './forms/SectionForm.vue';

export default {
  name: 'sections-professors',
  components: {
    SectionOurs,
    SectionForm,
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
      this.sections = await api.getProfessorSections(this.user);
    },
  },
};
</script>
