<template>
  <b-card class="container" header="Add a Section:">
    <b-form v-on:submit="onSubmit" v-on:reset="onReset" v-if="show">
      <b-form-group label-for="course-id" description="Ex. CS3200">
        <b-form-input
          id="course-id"
          v-model="section.courseId"
          type="text"
          required
          placeholder="Enter Course Id *" />
      </b-form-group>
      <b-form-group label-for="section-id">
        <b-form-input
          id="section-id"
          v-model="section.sectionId"
          type="number"
          required
          placeholder="Enter CRN *" />
      </b-form-group>
      <b-form-group label-for="meeting-times" description="Ex. MWR 10:30-11:35 or Online">
        <b-form-input
          id="meeting-times"
          v-model="section.meetingTimes"
          type="text"
          required
          placeholder="Enter Meeting Times *" />
      </b-form-group>
      <b-form-group label="Final date:" label-for="final-date" description="If applicable">
        <b-form-datepicker
          id="final-date"
          v-model="section.finalDate"
          class="mb-2" />
      </b-form-group>
      <b-form-group id="blackboard-url-group" label-for="blackboard-url">
        <b-form-input
          id="blackboard-url"
          v-model="section.blackboardUrl"
          type="url"
          placeholder="Blackboard Url" />
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </b-card>
</template>

<script>
import api from '../services/api';

export default {
  name: 'section-form',
  props: {
    sectionProp: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      section: {},
      show: true,
      error: '',
    };
  },
  watch: {
    sectionProp: {
      immediate: true,
      handler() {
        this.section = { ...this.sectionProp };
      },
    },
  },
  computed: {
    editing() {
      return !!this.sectionProp.sectionId;
    },
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      this.section.sectionId = parseInt(this.section.sectionId, 10);
      try {
        const res = this.editing ? await api.updateSection(this.section)
          : await api.createSection(this.section);

        if (res.error) {
          this.error = res.error;
          // eslint-disable-next-line no-alert
          alert(`ERROR: ${res.error.sqlMessage}`);
        } else if (!this.editing) {
          // eslint-disable-next-line no-alert
          alert('Your section has successfully been created!');
        }

        if (this.editing) {
          this.$emit('updated');
        } else {
          this.section = {};
        }
      } catch (err) {
        this.error = err;
      }
    },
    onReset(evt) {
      evt.preventDefault();
      this.section = {};
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
