<template>
  <div>
    <label-form :user="user" v-on:updated="setLabels()"/>
    <br>
    <h1>Current Labels</h1>
    <list
      :user="user"
      :list="labels"
      :deleteItem="deleteLabel"
      :editState="editing"
      v-on:edit="changeEditState">
      <template v-slot:fields="slotProps">
        <p>Name: {{slotProps.item.labelName}}</p>
        <p>Color: {{slotProps.item.labelColor}}</p>
      </template>
      <template v-slot:form="slotProps">
        <label-form v-on:updated="setLabels()" :labelProp="slotProps.item" />
      </template>
    </list>
  </div>
</template>

<script>
import api from '../services/api';
import LabelForm from '../components/LabelForm.vue';
import List from '../components/helper/list.vue';

export default {
  name: 'label-view',
  components: {
    LabelForm,
    List,
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
      editing: [],
    };
  },
  watch: {
    labels() {
      this.setEditState();
    },
  },
  async created() {
    this.setLabels();
    this.setEditState();
  },
  methods: {
    async setLabels() {
      console.log('setLabels');
      this.labels = await api.getLabels();
      this.setEditState();
    },
    async deleteLabel(label) {
      try {
        await api.deleteLabel(label);
      } catch (err) {
        this.error = err;
      }
      this.setLabels();
    },
    setEditState() {
      this.editing = [...this.labels.map(() => false)];
    },
    changeEditState(index) {
      this.editing[index] = true;
      this.editing = [...this.editing];
    },
  },
};
</script>

<!--
<template>
  <div>
    <label-form :user="user"/>
    <br>
    <h1>Current Labels</h1>
    <labels :user="user" />
  </div>
</template>

<script>
import LabelForm from '../components/LabelForm.vue';
import Labels from '../components/Labels.vue';

export default {
  name: 'label-view',
  components: {
    LabelForm,
    Labels,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>
-->
