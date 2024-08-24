<template>
  <div class="container mt-4">
    <h1>Tâches</h1>
    <router-link to="/taches/add" class="btn btn-primary mb-3"
      >Ajouter une tâche</router-link
    >
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
            <router-link :to="'/taches/' + index" class="btn btn-info"
              ><i class="fa-solid fa-eye"></i></router-link
            >
            <router-link :to="'/taches/edit/' + index" class="btn btn-warning"
              ><i class="fa-solid fa-pen-to-square"></i></router-link
            >
            <button @click="deleteTask(index)" class="btn btn-danger">
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

const taskStore = useGestionStore();
const taches = taskStore.taches;

const deleteTask = (index) => {
  taskStore.deleteTask(index);
};
</script>
  