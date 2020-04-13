<template>
  <b-card class="container" header="Add a Course:">
    <b-form v-on:submit="onSubmit" v-on:reset="onReset" v-if="show">
      <b-form-group label-for="course-id" description="Ex. CS3200">
        <b-form-input
          id="course-id"
          v-model="course.courseId"
          type="text"
          required
          placeholder="Enter Course Id *" />
      </b-form-group>
      <b-form-group label-for="name" description="Ex. Database Design">
        <b-form-input
          id="name"
          v-model="course.name"
          type="text"
          required
          placeholder="Enter Course Name *" />
      </b-form-group>
      <b-form-group label-for="description">
        <b-form-input
          id="description"
          v-model="course.description"
          type="text"
          required
          placeholder="Enter Course Description *" />
      </b-form-group>
      <b-form-group label-for="piazza-url">
        <b-form-input
          id="piazza-url"
          v-model="course.piazzaUrl"
          type="url"
          placeholder="Piazza Url" />
      </b-form-group>
      <b-form-group label-for="course-website-url">
        <b-form-input
          id="course-website-url"
          v-model="course.courseWebsiteUrl"
          type="url"
          placeholder="Course Website Url" />
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </b-card>
</template>

<script>
import api from '../services/api';

export default {
  name: 'course-form',
  data() {
    return {
      course: {},
      show: true,
      error: '',
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();

      try {
        const res = await api.createCourse(this.course);
        if (res.error) {
          this.error = res.error;
          // eslint-disable-next-line no-alert
          alert(`ERROR: ${res.error.sqlMessage}`);
        } else {
          // eslint-disable-next-line no-alert
          alert('Your course has successfully been created!');
        }
        this.course = {};
      } catch (err) {
        this.error = err;
      }
    },
    onReset(evt) {
      evt.preventDefault();
      this.course = {};
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};

</script>

<style lang="less" scoped>
.container {
  width: 40%;
}
</style>
