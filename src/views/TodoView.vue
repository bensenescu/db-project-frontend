<template>
  <div>
    <todo-form :user="user" v-on:updated="setTodos()"/>
    <br>
    <h1>Current Todos</h1>
    <list
      :user="user"
      :list="todos"
      :deleteItem="deleteTodo"
      :editState="editing"
      v-on:edit="changeEditState">
      <template v-slot:fields="slotProps">
        <p>Name: {{slotProps.item.itemName}}</p>
        <p>Task: {{slotProps.item.task}}</p>
        <p>Label: {{slotProps.item.label}}</p>
      </template>
      <template v-slot:form="slotProps">
        <todo-form v-on:updated="setTodos()" :user="user" :todoProp="slotProps.item" />
      </template>
    </list>
  </div>
</template>

<script>
import api from '../services/api';
import TodoForm from '../components/forms/TodoForm.vue';
import List from '../components/helper/list.vue';

export default {
  name: 'todo-view',
  components: {
    TodoForm,
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
      todos: [],
      editing: [],
    };
  },
  watch: {
    todos() {
      this.setEditState();
    },
  },
  async created() {
    this.setTodos();
    this.setEditState();
  },
  methods: {
    async setTodos() {
      this.todos = await api.getStudentTodos(this.user);
      this.setEditState();
    },
    async deleteTodo(todo) {
      console.log('delete');
      try {
        await api.deleteTodo(todo);
      } catch (err) {
        this.error = err;
      }
      this.setTodos();
    },
    setEditState() {
      this.editing = [...this.todos.map(() => false)];
    },
    changeEditState(index) {
      this.editing[index] = true;
      this.editing = [...this.editing];
    },
  },
};
</script>
