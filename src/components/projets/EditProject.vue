<template>
  <div class="container mt-4">
    <h1>Modifier le projet</h1>
    <form @submit.prevent="updateProject">
      <div class="mb-3">
        <label for="name" class="form-label">Nom du projet</label>
        <input
          v-model="nom"
          type="text"
          class="form-control"
          id="name"
          required
        />
      </div>
      <div class="mb-3">
        <label for="startDate" class="form-label">Date de début</label>
        <input
          v-model="dateDebut"
          type="date"
          class="form-control"
          id="startDate"
          required
        />
      </div>
      <div class="mb-3">
        <label for="endDate" class="form-label">Date de fin</label>
        <input
          v-model="dateFin"
          type="date"
          class="form-control"
          id="endDate"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Mettre à jour</button>
    </form>
  </div>
</template>
  
  <script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import { useGestionStore } from "../../stores/gestion";

const route = useRoute();
const router = useRouter();
const projectStore = useGestionStore();
const projectId = Number(route.params.id);

const nom = ref("");
const dateDebut = ref("");
const dateFin = ref("");

onMounted(() => {
  const project = projectStore.projects[projectId];
  if (project) {
    nom.value = project.nom;
    dateDebut.value = project.dateDebut;
    dateFin.value = project.dateFin;
  }
});

const updateProject = () => {
  projectStore.updateProject(projectId, {
    nom: nom.value,
    dateDebut: dateDebut.value,
    dateFin: dateFin.value,
  });
  router.push("/projets");
};
</script>
  