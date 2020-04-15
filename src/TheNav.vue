<template>
  <div>
    <b-nav tabs>
      <router-link tag="b-nav-item" to="/">Home</router-link>
      <div v-if="isProfessor">
        <router-link tag="b-nav-item" to="/calendar">
          Add Calendar Items to Course
        </router-link>
        <router-link tag="b-nav-item" to="/students">
          Students
        </router-link>
      </div>
      <div v-else>
         <router-link tag="b-nav-item" to="/enroll">
          Enroll
        </router-link>
        <router-link tag="b-nav-item" to="/todo">
          Todo Items
        </router-link>
        <router-link tag="b-nav-item" to="/label">
          Labels
        </router-link>
        <router-link tag="b-nav-item" to="/students">
          Students
        </router-link>
      </div>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: 'TheNav',
  props: {
    isProfessor: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
