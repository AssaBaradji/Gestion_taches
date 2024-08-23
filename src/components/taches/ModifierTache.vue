<template>
  <div>
    <h1>Modifier la tâche</h1>
    <form @submit.prevent="updateTask">
      <div class="mb-3">
        <label for="name" class="form-label">Nom de la tâche</label>
        <input
          v-model="name"
          type="text"
          class="form-control"
          id="name"
          required
        />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea
          v-model="description"
          class="form-control"
          id="description"
          required
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="startDate" class="form-label">Date de début</label>
        <input
          v-model="startDate"
          type="date"
          class="form-control"
          id="startDate"
          required
        />
      </div>
      <div class="mb-3">
        <label for="endDate" class="form-label">Date de fin</label>
        <input
          v-model="endDate"
          type="date"
          class="form-control"
          id="endDate"
          required
        />
      </div>
      <div class="mb-3">
        <label for="project" class="form-label">Projet associé</label>
        <select v-model="project" class="form-control" id="project" required>
          <option value="" disabled>Sélectionnez un projet</option>
          <option
            v-for="(proj, index) in projects"
            :key="index"
            :value="proj.nom"
          >
            {{ proj.nom }}
          </option>
        </select>
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
const taskStore = useGestionStore();
const projects = taskStore.projects;

const name = ref("");
const description = ref("");
const startDate = ref("");
const endDate = ref("");
const project = ref("");

const taskId = Number(route.params.id);

onMounted(() => {
  const task = taskStore.taches[taskId];
  if (task) {
    name.value = task.name;
    description.value = task.description;
    startDate.value = task.startDate;
    endDate.value = task.endDate;
    project.value = task.project;
  }
});

const updateTask = () => {
  const selectedProject = projects.find((proj) => proj.nom === project.value);
  if (!selectedProject) {
    alert("Projet non trouvé, veuillez sélectionner un projet valide.");
    return;
  }

  taskStore.updateTask(taskId, {
    name: name.value,
    description: description.value,
    startDate: startDate.value,
    endDate: endDate.value,
    project: project.value,
  });

  router.push("/");
};
</script>
