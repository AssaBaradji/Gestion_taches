<template>
    <div class="container mt-4">
      <h1>Ajouter une tâche</h1>
      <form @submit.prevent="addNewTask">
        <div class="mb-3">
          <label for="name" class="form-label">Nom de la tâche</label>
          <input v-model="name" type="text" class="form-control" id="name" required>
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <textarea v-model="description" class="form-control" id="description" required></textarea>
        </div>
        <div class="mb-3">
          <label for="startDate" class="form-label">Date de début</label>
          <input v-model="startDate" type="date" class="form-control" id="startDate" required>
        </div>
        <div class="mb-3">
          <label for="endDate" class="form-label">Date de fin</label>
          <input v-model="endDate" type="date" class="form-control" id="endDate" required>
        </div>
        <div class="mb-3">
          <label for="project" class="form-label">Projet associé</label>
          <select v-model="project" class="form-control" id="project" >
            <option v-for="(proj, index) in projects" :key="index" :value="proj.name">
              {{ proj.name }}
            </option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">Ajouter</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
import { useGestionStore } from '../../stores/gestion';
//   import { useTaskStore } from '../../stores/useTaskStore';
//   import { useProjectStore } from '../../stores/useProjectStore';

  
  const name = ref('');
  const description = ref('');
  const startDate = ref('');
  const endDate = ref('');
  const project = ref('');
  const router = useRouter();
  const taskStore = useGestionStore();
  const projectStore = useGestionStore();
  const projects = projectStore.projects;
  
  const addNewTask = () => {
    taskStore.addTask({
      name: name.value,
      description: description.value,
      startDate: startDate.value,
      endDate: endDate.value,
      project: project.value,
    });
    router.push('/');

    name.value=""
    description.value=""
    startDate.value=""
    endDate.value=""
    project.value=""
  };
  </script>
  