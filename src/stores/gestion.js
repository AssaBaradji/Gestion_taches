import { defineStore } from "pinia";

export const useGestionStore = defineStore("gestion", {
  state: () => ({
    tache: [],
    projects: [],
  }),
  actions: {
    addProjet(project) {
      this.projects.push(project);
    },

    deleteProject(index) {
      this.projects.splice(index, 1);
    },
    updateProject(index, updatedProject) {
      this.projects[index] = updatedProject;
    },
    listeProjet() {},
    modifierProjet() {},
  },
});
