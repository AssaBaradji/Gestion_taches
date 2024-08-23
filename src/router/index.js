import { createRouter, createWebHistory } from "vue-router";
import ListeProjet from "../components/projets/ListeProjet.vue";
import ListeTache from "../components/taches/ListeTache.vue";
import AjouterProjet from "../components/projets/AjouterProjet.vue";
import ProjectDetail from "../components/projets/ProjectDetail.vue";
import EditProject from "../components/projets/EditProject.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/Projets",
      name: "ListeProjet",
      component: ListeProjet,
    },
    { path: "/projets/add", component: AjouterProjet },
    { path: '/projets/:id', component: ProjectDetail, props: true },
    { path: '/projets/edit/:id', component: EditProject, props: true },
    {
      path: "/",
      name: "taches",
      component: ListeTache,
    },
  ],
});

export default router;
