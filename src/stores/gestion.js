import { defineStore } from "pinia";

export const useGestionStore = defineStore("gestion", {
  state: () => ({
    taches: [],
    projects: [{ nom: "Projet A", dateDebut: "2024-01-01", dateFin: "2024-12-31" },
      { nom: "Projet B", dateDebut: "2024-02-01", dateFin: "2024-11-30" },],
  }),
  actions: {
    addProjet(project) {
      this.projects.push(project);
    },
    addTask(tache){
        this.taches.push(tache)
    },
    
      deleteTask(index){
        this.taches.splice(index, 1)
      }
    ,
    deleteProject(index) {
      this.projects.splice(index, 1);
    },
    updateProject(index, updatedProject) {
      this.projects[index] = updatedProject;
    },
    updateTask(index, updateTask){
      this.taches[index] = updateTask
    },
    listeProjet() {},
    modifierProjet() {},
  },
});
