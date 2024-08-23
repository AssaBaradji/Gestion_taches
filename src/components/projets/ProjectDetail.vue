<template>
    <div class="container mt-4">
      <h1>Détails du projet</h1>
      <div v-if="project">
        <p><strong>Nom:</strong> {{ project.nom }}</p>
        <p><strong>Date de début:</strong> {{ project.dateDebut }}</p>
        <p><strong>Date de fin:</strong> {{ project.dateFin }}</p>
      </div>
      <router-link to="/projets" class="btn btn-secondary">Retour à la liste des projets</router-link>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
//   import { useProjectStore } from '../../stores/useProjectStore';
import { useGestionStore } from '../../stores/gestion';
  
  const route = useRoute();
  const projectStore = useGestionStore();
  const projectId = Number(route.params.id);
  
  const project = computed(() => projectStore.projects[projectId]);
  </script>
  