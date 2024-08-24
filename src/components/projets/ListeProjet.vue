<template>
  <div class="container mt-4">
    <h1>Projets</h1>
    <router-link to="/projets/add" class="btn btn-primary mb-3"
      >Ajouter un projet</router-link
    >
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Nom</th>
          <th>Date de début</th>
          <th>Date de fin</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(project, index) in projects" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ project.nom }}</td>
          <td>{{ project.dateDebut }}</td>
          <td>{{ project.dateFin }}</td>
          <td>
            <router-link :to="'/projets/' + index" class="btn btn-info"
              ><i class="fa-solid fa-eye"></i></router-link
            >
            <router-link :to="'/projets/edit/' + index" class="btn btn-warning"
              ><i class="fa-solid fa-pen-to-square"></i></router-link
            >
            <button @click="deleteProject(index)" class="btn btn-danger">
              <i class="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
  <script setup>
import { useGestionStore } from "../../stores/gestion";

const projectStore = useGestionStore();
const projects = projectStore.projects;

const deleteProject = (index) => {
  projectStore.deleteProject(index);
};
</script>
  
