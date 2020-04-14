<template>
  <div>
    <div v-if="!editing">
      <p>Name: {{student.name}}</p>
      <p>Email: {{student.email}}</p>
      <p>Major: {{student.studentMajor}}</p>
      <button class="btn-primary" v-on:click="editing = !editing">Edit</button>
      <button class="btn-danger" v-on:click="deleteStudent(student)">Delete</button>
    </div>
    <b-card v-else class="container text-center" header="Edit Student">
      <b-form v-on:submit="onSubmit">
        <b-form-group label-for="email">
          <b-form-input
            id="email"
            v-model="user.email"
            type="email"
            required
            placeholder="Email" />
        </b-form-group>
        <b-form-group label-for="name">
          <b-form-input
            id="name"
            v-model="user.name"
            type="text"
            required
            placeholder="Full Name" />
        </b-form-group>
        <b-form-group label-for="major">
          <b-form-input
            id="major"
            v-model="user.studentMajor"
            type="text"
            required
            placeholder="Major"
          />
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  name: 'student',
  props: {
    student: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      editing: false,
      user: {},
      error: '',
    };
  },
  created() {
    this.user = { ...this.student };
  },
  methods: {
    async deleteStudent(student) {
      try {
        await api.deleteStudent(student);
      } catch (err) {
        this.error = err;
      }
      this.$emit('update');
    },
    async updateStudent(student) {
      let res;
      try {
        res = await api.updateStudent(student);
      } catch (err) {
        this.error = err;
      }

      this.$emit('update');
      return res;
    },
    async onSubmit(evt) {
      evt.preventDefault();

      try {
        const res = await this.updateStudent(this.user);

        if (res.error) {
          this.error = res.error;
          // eslint-disable-next-line no-alert
          alert(`ERROR: ${res.error.sqlMessage}`);
        } else {
          this.editing = false;
        }
      } catch (err) {
        this.error = err;
      }
    },
  },
};
</script>
