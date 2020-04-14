<template>
    <div>
      <div v-if="!editing">
        <p>Course: {{section.sectionId}}</p>
        <p>CRN: {{section.courseId}}</p>
        <p>Meeting Times: {{section.meetingTimes}}</p>
        <p v-if="section.finalDate">Final Date: {{section.finalDate}}</p>
        <a :href="section.blackboardUrl">Go to Blackboard</a>
        <br>
        <button class="btn-primary" v-on:click="editing = !editing">Edit</button>
        <button class="btn-danger" v-on:click="deleteSection(section)">Delete</button>
      </div>
      <section-form
        v-else
        v-on:updated="editing = !editing; $emit('update')"
        :sectionProp="section" />
    </div>
</template>

<script>
import api from '../services/api';
import SectionForm from './forms/SectionForm.vue';

export default {
  name: 'section-ours',
  components: {
    SectionForm,
  },
  props: {
    section: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      editing: false,
    };
  },
  methods: {
    async deleteSection(section) {
      try {
        await api.deleteSection(section);
      } catch (err) {
        this.error = err;
      }
      this.$emit('update');
    },
  },
};
</script>
