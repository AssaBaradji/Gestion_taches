<template>
  <div class="container mt-4">
    <h1>Détails de la tâche</h1>
    <div v-if="task">
      <p><strong>Nom:</strong> {{ task.name }}</p>
      <p><strong>Description:</strong> {{ task.description }}</p>
      <p><strong>Date de début:</strong> {{ task.startDate }}</p>
      <p><strong>Date de fin:</strong> {{ task.endDate }}</p>
      <p><strong>Projet:</strong> {{ task.project }}</p>
    </div>
    <div v-else>
      <p>Tâche non trouvée.</p>
    </div>
    <router-link to="/" class="btn btn-secondary"
      >Retour à la liste des tâches</router-link
    >
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useGestionStore } from "../../stores/gestion";

const route = useRoute();
const taskStore = useGestionStore();
const taskId = Number(route.params.id);

const task = computed(() => {
  return taskId >= 0 && taskId < taskStore.taches.length
    ? taskStore.taches[taskId]
    : null;
});
</script>
