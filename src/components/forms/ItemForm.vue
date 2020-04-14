<template>
  <b-card class="container" header="Add a Calendar Item:">
    <b-form v-on:submit="onSubmit" v-on:reset="onReset" v-if="show">
      <b-form-group label-for="name" description="Ex. Homework 7">
        <b-form-input
          id="name"
          v-model="item.name"
          type="text"
          required
          placeholder="Enter Item Name *" />
      </b-form-group>
      <b-form-group label-for="description">
        <b-form-input
          id="description"
          v-model="item.description"
          type="text"
          placeholder="Enter Item Description" />
      </b-form-group>
      <b-form-group label-for="item-type">
        <b-form-select
          id="item-type"
          v-model="item.type"
          :options="itemOptions"/>
      </b-form-group>
      <b-form-group label-for="assignment-url" description="Optional: Link to the assignment">
        <b-form-input
          id="assigment-url"
          v-model="item.assignmentUrl"
          type="url"
          placeholder="Assignment Url" />
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </b-card>
</template>

<script>
import api from '../../services/api';

export default {
  name: 'item-form',
  data() {
    return {
      item: {},
      itemOptions: ['Homework', 'Quiz', 'Exam', 'Reading', 'Project', 'Other'],
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
          alert('Your item has successfully been created!');
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
