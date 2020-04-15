<template>
  <div v-on:click="show = !show">
    <p>Course: {{section.sectionId}}</p>
    <p>CRN: {{section.courseId}}</p>
    <p>Meeting Times: {{section.meetingTimes}}</p>
    <p v-if="section.finalDate">Final Date: {{section.finalDate}}</p>
    <a :href="section.blackboardUrl">Go to Blackboard</a>
    <b-list-group v-show="show">
    <br>
    <h2>Upcoming Assignments</h2>
    <b-list-group-item  v-for="item in items" :key="item.itemId">
        <p>Name: {{item.itemName}}</p>
        <p>Section: {{item.sectionId}}</p>
        <p>Description: {{item.description}}</p>
        <p>Type: {{item.itemType}}</p>
        <p>Due Date: {{item.dueDate}}</p>
    </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: 'section-dropdown',
  props: {
    section: {
      type: Object,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>
