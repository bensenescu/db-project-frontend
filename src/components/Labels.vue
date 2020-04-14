<template>
  <b-list-group>
    <b-list-group-item v-for="label in labels" :key="label.labelId">
      <label-ours v-on:update="setLabels()" :label="label"/>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import api from '../services/api';
import LabelOurs from './Label.vue';

export default {
  name: 'labels',
  components: {
    LabelOurs,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      labels: [],
    };
  },
  async created() {
    this.setLabels();
  },
  methods: {
    async setLabels() {
      this.labels = await api.getLabels();
    },
  },
};
</script>
