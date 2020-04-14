<template>
  <div v-if="!editing">
    <p>Name: {{label.labelName}}</p>
    <p :class="{color: label.labelColor}">Color: {{label.labelColor}}</p>
    <button class="btn-primary" v-on:click="editing = !editing">Edit</button>
    <button class="btn-danger" v-on:click="deleteLabel(label)">Delete</button>
  </div>
  <label-form
    v-else
    v-on:updated="editing = !editing; $emit('update')"
    :labelProp="label" />
</template>

<script>
import api from '../services/api';
import LabelForm from './LabelForm.vue';

export default {
  name: 'label-ours',
  components: {
    LabelForm,
  },
  props: {
    label: {
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
    async deleteLabel(label) {
      try {
        await api.deleteLabel(label);
      } catch (err) {
        this.error = err;
      }
      this.$emit('update');
    },
  },
};
</script>
