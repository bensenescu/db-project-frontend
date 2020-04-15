<template>
  <div>
    <h1>Add items to your sections:</h1>
    <item-form :user="user" v-on:updated="setItems()"/>
    <br>
    <h1>Current Items</h1>
    <list
      :user="user"
      :list="items"
      :deleteItem="deleteItem"
      :editState="editing"
      v-on:edit="changeEditState">
      <template v-slot:fields="slotProps">
        <p>Name: {{slotProps.item.itemName}}</p>
        <p>Section: {{slotProps.item.sectionId}}</p>
        <p>Description: {{slotProps.item.description}}</p>
        <p>Type: {{slotProps.item.itemType}}</p>
        <p>Due Date: {{slotProps.item.dueDate}}</p>
      </template>
      <template v-slot:form="slotProps">
        <item-form
          v-on:updated="setItems()"
          :itemProp="slotProps.item"
          :user="user" />
      </template>
    </list>
  </div>
</template>

<script>
import api from '../services/api';
import ItemForm from '../components/forms/ItemForm.vue';
import List from '../components/helper/list.vue';

export default {
  name: 'calendar-view',
  components: {
    ItemForm,
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
      items: [],
      editing: [],
    };
  },
  watch: {
    items() {
      this.setEditState();
    },
  },
  async created() {
    this.setItems();
    this.setEditState();
  },
  methods: {
    async setItems() {
      this.items = await api.getProfessorCalendarItems(this.user);
      this.setEditState();
    },
    async deleteItem(item) {
      try {
        await api.deleteCalendarItem(item);
      } catch (err) {
        this.error = err;
      }
      this.setItems();
    },
    setEditState() {
      this.editing = [...this.items.map(() => false)];
    },
    changeEditState(index) {
      this.editing[index] = true;
      this.editing = [...this.editing];
    },
  },
};
</script>
