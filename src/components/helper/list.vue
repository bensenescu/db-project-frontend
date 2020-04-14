<template>
  <b-list-group>
    <b-list-group-item
      v-for="(item, index) in list"
      :key="index">
      <div v-if="!editState[index]">
        <slot name="fields" :item="item" />
        <button class="btn-primary" v-on:click="$emit('edit', index)">
          Edit
        </button>
        <button class="btn-danger" v-on:click="deleteItem(item)">
          Delete
        </button>
      </div>
      <slot
        v-else
        name="form"
        :item="item"/>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  name: 'list',
  props: {
    user: {
      type: Object,
      required: true,
    },
    list: {
      type: Array,
      required: true,
    },
    deleteItem: {
      type: Function,
      required: true,
    },
    editState: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      editing: false,
    };
  },
};
</script>
