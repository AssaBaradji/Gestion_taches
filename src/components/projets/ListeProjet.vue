<!-- <template>
  <div class="container">
    <AjouterProjet />

    <div class="row mt-4">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom</th>
            <th scope="col">Date de début</th>
            <th scope="col">Date de fin</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(projet,index) int projets" :key="index">
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
                <button>detail</button>
                <button>Modifier</button>
                <button>Supprimer</button>
            </td>
          </tr>
         
        </tbody>
      </table>
    </div>
    <-- <ModifierProjet /> ->
  </div>
</template>

<script setup>
import { useGestionStore } from '../../stores/gestion';

// import AjouterProjet from "./AjouterProjet.vue";
// import ModifierProjet from "./ModifierProjet.vue";

const gestion = useGestionStore();
const projets = gestion.projets;
</script> -->




<template>
    <div class="container mt-4">
      <h1>Projets</h1>
      <router-link to="/projets/add" class="btn btn-primary mb-3">Ajouter un projet</router-link>
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
            <td>{{ index+1 }}</td>
            <td>{{ project.nom }}</td>
            <td>{{ project.dateDebut }}</td>
            <td>{{ project.dateFin }}</td>
            <td>
              <router-link :to="'/projets/' + index" class="btn btn-info">Détails</router-link>
              <router-link :to="'/projets/edit/' + index" class="btn btn-warning">Modifier</router-link>
              <button @click="deleteProject(index)" class="btn btn-danger">Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { useGestionStore } from '../../stores/gestion';
  
  const projectStore = useGestionStore();
  const projects = projectStore.projects;
  
  const deleteProject = (index) => {
    projectStore.deleteProject(index);
  };
  </script>
  
