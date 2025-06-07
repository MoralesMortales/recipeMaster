import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/mainView.vue"; // Ajusta la ruta según tu proyecto
import ListFood from "../components/listFood/listFood.vue"; // Ajusta la ruta según tu proyecto

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/list-food",
    name: "listFood",
    component: ListFood,
    props: (route) => ({
      foods: route.query.foods ? JSON.parse(route.query.foods) : [],
    }),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
