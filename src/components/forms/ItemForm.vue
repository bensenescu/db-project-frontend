<template>
  <b-card class="container" header="Add a Calendar Item:">
    <b-form v-on:submit="onSubmit" v-on:reset="onReset" v-if="show">
      <b-form-group label-for="item-type" description="Which section is this for?">
        <b-form-select
          id="item-type"
          v-model="item.sectionId"
          required
          :options="sectionOptions"/>
      </b-form-group>
      <b-form-group label-for="name" description="Ex. Homework 7">
        <b-form-input
          id="name"
          v-model="item.itemName"
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
      <b-form-group label-for="item-type" description="Item Type | Ex. Homework">
        <b-form-select
          id="item-type"
          v-model="item.itemType"
          :options="itemOptions"/>
      </b-form-group>
      <b-form-group label-for="due-date" description="Due Date">
        <b-form-datepicker
          id="due-date"
          required
          v-model="item.dueDate"
          class="mb-2" />
      </b-form-group>
      <b-form-group label-for="assignment-url" description="Optional: Link to the assignment">
        <b-form-input
          id="assigment-url"
          v-model="item.fileUrl"
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
  props: {
    user: {
      type: Object,
      required: true,
    },
    itemProp: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      item: {},
      itemOptions: ['Homework', 'Quiz', 'Exam', 'Reading', 'Project', 'Other'],
      sectionOptions: [],
      show: true,
      error: '',
    };
  },
  watch: {
    itemProp: {
      immediate: true,
      handler() {
        this.item = { ...this.itemProp };
      },
    },
  },
  computed: {
    editing() {
      return !!this.itemProp.itemId;
    },
  },
  async created() {
    await this.setSectionOptions();
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();

      console.log('submit');
      try {
        const res = this.editing ? await api.updateCalendarItem(this.item)
          : await api.createCalendarItem(this.item);

        if (res.error) {
          this.error = res.error;
          // eslint-disable-next-line no-alert
          alert(`ERROR: ${res.error.sqlMessage}`);
        } else {
          // eslint-disable-next-line no-alert
          alert(`Your item has successfully been ${this.editing ? 'edited' : 'created'}!`);
        }

        this.$emit('updated');
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
    async setSectionOptions() {
      const sections = await api.getProfessorSections(this.user);
      this.sectionOptions = sections.map((section) => section.sectionId);
    },
  },
};

</script>

<style lang="less" scoped>
.container {
  width: 40%;
}
</style>
