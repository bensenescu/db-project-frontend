import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SectionForm from '../components/SectionForm.vue';
import Sections from '../views/Sections.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/sections',
    name: 'Sections',
    component: Sections,
  },
  {
    path: '/section-form',
    name: 'SectionForm',
    component: SectionForm,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
