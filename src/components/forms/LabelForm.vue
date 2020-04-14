<template>
  <b-card class="container" header="Add a label:">
    <b-form v-on:submit="onSubmit" v-on:reset="onReset" v-if="show">
      <b-form-group label-for="name" description="Ex. Send an Email">
        <b-form-input
          id="name"
          v-model="label.labelName"
          type="text"
          required
          placeholder="Enter Item Name *" />
      </b-form-group>
      <b-form-group label-for="task" description="Ex. blue or yellow">
        <b-form-input
          id="task"
          v-model="label.labelColor"
          type="text"
          placeholder="Color" />
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </b-card>
</template>

<script>
import api from '../../services/api';

export default {
  name: 'label-form',
  props: {
    labelProp: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      label: {},
      show: true,
      error: '',
    };
  },
  watch: {
    labelProp: {
      immediate: true,
      handler() {
        this.label = { ...this.labelProp };
      },
    },
  },
  computed: {
    editing() {
      return !!this.labelProp.labelId;
    },
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();

      try {
        const res = this.editing ? await api.updateLabel(this.label)
          : await api.createLabel(this.label);

        if (res.error) {
          this.error = res.error;
          // eslint-disable-next-line no-alert
          alert(`ERROR: ${res.error.sqlMessage}`);
        } else {
          // eslint-disable-next-line no-alert
          alert(`Your label has successfully been ${this.editing ? 'edited' : 'created'}!`);
        }
        this.label = {};
      } catch (err) {
        this.error = err;
      }

      this.$emit('updated');
      this.section = {};
    },
    onReset(evt) {
      evt.preventDefault();
      this.label = {};
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
