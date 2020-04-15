<template>
  <b-list-group>
    <h1>Calendar</h1>
    <h5>Click on a section to see calendar items</h5>
    <h3 v-if="sections.length === 0 || calendarArray.length === 0">
      Please enroll in section with calendar Items.
      Go to enroll in the header.
      Once enrolled please refresh the page and sign back in.
    </h3>
    <b-list-group v-else >
       <b-list-group-item v-for="(section, index) in sections" :key="section.sectionId">
        <section-dropdown :section="section" :items="calendarArray[index]" />
       </b-list-group-item>
    </b-list-group>
  </b-list-group>
</template>

<script>
import api from '../services/api';
import SectionDropdown from './SectionDropdown.vue';

export default {
  name: 'sections',
  components: {
    SectionDropdown,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      sections: [],
      calendarArray: [],
    };
  },
  watch: {
    sections: {
      immediate: true,
      async handler() {
        await this.setCalendarArray();
      },
    },
  },
  async created() {
    await this.setSections();
  },
  methods: {
    async setSections() {
      this.sections = await api.getStudentSections(this.user.studentId);
    },
    async setCalendarArray() {
      const calendarItems = await api.getStudentCalendarItems(this.user.studentId);
      // eslint-disable-next-line array-callback-return
      this.calendarArray = this.sections.map(({ sectionId }) => {
        const sectionItems = calendarItems.filter((item) => item.sectionId !== sectionId);
        // eslint-disable-next-line arrow-body-style
        return sectionItems.map((item) => {
          return {
            itemId: item.itemId,
            sectionId: item.sectionId,
            itemName: item.itemName,
            description: item.description,
            itemType: item.itemType,
            dueDate: item.dueDate,
            fileUrl: item.fileUrl,
          };
        });
      });
    },
  },
};
</script>
