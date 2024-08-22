import { createRouter, createWebHistory } from "vue-router";
import ListeProjet from "../components/projets/ListeProjet.vue";
import ListeTache from "../components/taches/ListeTache.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Projets',
      name: 'ListeProjet',
      component: ListeProjet
    },
    {
        path:'/',
        name:'taches',
        component: ListeTache

    }
  ],
});

export default router;