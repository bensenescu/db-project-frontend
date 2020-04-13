<template>
  <b-card class="container" header="Add a Todo Item:">
    <b-form v-on:submit="onSubmit" v-on:reset="onReset" v-if="show">
      <b-form-group label-for="name" description="Ex. Send an Email">
        <b-form-input
          id="name"
          v-model="item.itemName"
          type="text"
          required
          placeholder="Enter Item Name *" />
      </b-form-group>
      <b-form-group label-for="task">
        <b-form-input
          id="task"
          v-model="item.task"
          type="text"
          placeholder="Description of the task" />
      </b-form-group>
      <b-form-select v-model="item.label" :options="labelOptions"></b-form-select>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </b-card>
</template>

<script>
import api from '../services/api';

export default {
  name: 'item-form',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      item: {},
      labelOptions: [{ value: null, text: 'Please choose a label' }],
      show: true,
      error: '',
    };
  },
  async created() {
    try {
      const labels = await api.getLabels(this.user.email);
      this.labelOptions = this.labelOptions.concat(labels);
    } catch (error) {
      this.error = error;
    }
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();

      try {
        const res = await api.createTodo(this.course);
        if (res.error) {
          this.error = res.error;
          // eslint-disable-next-line no-alert
          alert(`ERROR: ${res.error.sqlMessage}`);
        } else {
          // eslint-disable-next-line no-alert
          alert('Your todo item has successfully been created!');
        }
        this.item = {};
      } catch (err) {
        this.error = err;
      }
    },
    onReset(evt) {
      evt.preventDefault();
      this.item = {};
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
