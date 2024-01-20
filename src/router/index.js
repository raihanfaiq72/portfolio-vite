// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import IndexView from '../views/IndexView.vue';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path : '/profile',
    name: 'profile',
    component : IndexView
  }
  // Tambahkan rute lainnya sesuai kebutuhan
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
