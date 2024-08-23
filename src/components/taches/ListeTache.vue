<!-- <template>
  <div class="container mt-4">
    <AjouterTache />
    <div class="row mt-4">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom de la tâche</th>
            <th scope="col">Description</th>
            <th scope="col">Date de début</th>
            <th scope="col">Date de fin</th>
            <th scope="col">Projet</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task, index) in tasks" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ task.nom }}</td>
            <td>{{ task.description }}</td>
            <td>{{ task.dateDebut }}</td>
            <td>{{ task.dateFin }}</td>
            <td>{{ task.projet }}</td>
            <td>
              <button class="btn btn-danger btn-xs" @click="removeTask(index)">
                <i class="fa-solid fa-trash-can"></i>
              </button>
              <button class="btn btn-secondary btn-xs" @click="editTask(index)">
                <i class="fa-solid fa-pen"></i>
              </button>
              <router-link class="btn btn-info btn-xs" :to="'/details' + index">
                <i class="fa-solid fa-eye"></i>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

  <script setup>
import AjouterTache from "./AjouterTache.vue";
import { useGestionStore } from "../../stores/gestion";

const tasksStore = useGestionStore();
const tasks = tasksStore.taches;

function removeTask(index) {
  tasksStore.taches.splice(index, 1);
}

function editTask(index) {}

function viewDetails(task) {}
</script> -->



<template>
    <div class="container mt-4">
      <h1>Tâches</h1>
      <router-link to="/taches/add" class="btn btn-primary mb-3">Ajouter une tâche</router-link>
      <table class="table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Projet</th>
            <th>Date de début</th>
            <th>Date de fin</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task, index) in taches" :key="index">
            <td>{{ task.name }}</td>
            <td>{{ task.project }}</td>
            <td>{{ task.startDate }}</td>
            <td>{{ task.endDate }}</td>
            <td>
              <router-link :to="'/taches/' + index" class="btn btn-info">Détails</router-link>
              <router-link :to="'/taches/edit/' + index" class="btn btn-warning">Modifier</router-link>
              <button @click="deleteTask(index)" class="btn btn-danger">Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { useGestionStore } from '../../stores/gestion';
  
  const taskStore = useGestionStore();
  const taches = taskStore.taches;
  
  const deleteTask = (index) => {
    taskStore.deleteTask(index);
  };
  </script>
  