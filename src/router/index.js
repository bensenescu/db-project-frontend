import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SectionForm from '../components/forms/SectionForm.vue';
import CourseForm from '../components/forms/CourseForm.vue';
import ItemForm from '../components/forms/ItemForm.vue';
import NotFoundView from '../NotFoundView.vue';
import TodoView from '../views/TodoView.vue';
import AuthView from '../views/AuthView.vue';
import StudentView from '../views/StudentView.vue';
import LabelView from '../views/LabelView.vue';
import EnrollView from '../views/EnrollView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/auth',
    name: 'Auth',
    component: AuthView,
  },
  {
    path: '/students',
    name: 'Students',
    component: StudentView,
  },
  {
    path: '/section-form',
    name: 'SectionForm',
    component: SectionForm,
  },
  {
    path: '/course-form',
    name: 'CourseForm',
    component: CourseForm,
  },
  {
    path: '/item-form',
    name: 'ItemForm',
    component: ItemForm,
  },
  {
    path: '/todo',
    name: 'Todo',
    component: TodoView,
  },
  {
    path: '/label',
    name: 'Label',
    component: LabelView,
  },
  {
    path: '/enroll',
    name: 'Enroll',
    component: EnrollView,
  },

  {
    path: '*',
    name: 'NotFound',
    component: NotFoundView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
