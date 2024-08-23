import { createRouter, createWebHistory } from "vue-router";
import ListeProjet from "../components/projets/ListeProjet.vue";
import ListeTache from "../components/taches/ListeTache.vue";
import AjouterProjet from "../components/projets/AjouterProjet.vue";
import ProjectDetail from "../components/projets/ProjectDetail.vue";
import EditProject from "../components/projets/EditProject.vue";
import AjouterTache from "../components/taches/AjouterTache.vue";
import DetailsTache from "../components/taches/DetailsTache.vue";
import ModifierTache from "../components/taches/ModifierTache.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/Projets",
      name: "ListeProjet",
      component: ListeProjet,
    },
    { path: '/taches/add', component: AjouterTache },
    { path: "/projets/add", component: AjouterProjet },
    { path: '/taches/edit/:id', component: ModifierTache, props: true },
    { path: '/taches/:id', component: DetailsTache, props: true },
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
