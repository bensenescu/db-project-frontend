<template>
  <b-list-group>
    <b-list-group-item v-for="student in students" :key="student.studentId">
      <student :student="student" v-on:update="setStudents()" />
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import api from '../services/api';
import Student from '../components/Student.vue';

export default {
  name: 'student-view',
  components: {
    Student,
  },
  data() {
    return {
      students: [],
      error: '',
    };
  },
  async created() {
    this.setStudents();
  },
  methods: {
    async setStudents() {
      this.students = await api.getStudents();
    },
  },
};
</script>
