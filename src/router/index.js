import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SectionForm from '../components/SectionForm.vue';
import CourseForm from '../components/CourseForm.vue';
import ItemForm from '../components/ItemForm.vue';
import NotFoundView from '../NotFoundView.vue';
import TodoForm from '../components/TodoForm.vue';
import AuthView from '../views/AuthView.vue';

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
    path: '/todo-form',
    name: 'TodoForm',
    component: TodoForm,
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
