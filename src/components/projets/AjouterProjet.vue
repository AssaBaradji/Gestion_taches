<template>
  <div class="container mt-4">
    <form class="row g-3 needs-validation" @submit.prevent="formulaire">
      <div class="col-md-4">
        <label for="validationCustom01" class="form-label">Nom</label>
        <input
          type="text"
          class="form-control"
          id="validationCustom01"
          v-model="nom"
          required
        />
        <div class="valid-feedback">Nom</div>
      </div>
      <div class="col-md-4">
        <label for="validationCustom01" class="form-label">Date de début</label>
        <input
          type="date"
          class="form-control"
          id="validationCustom01"
          v-model="dateDebut"
          required
        />
        <div class="valid-feedback">Looks good!</div>
      </div>
      <div class="col-md-4">
        <label for="validationCustom01" class="form-label">Date de fin</label>
        <input
          type="date"
          class="form-control"
          id="validationCustom01"
          v-model="dateFin"
          required
        />
        <div class="valid-feedback">Looks good!</div>
      </div>
      <div class="col-12">
        <button class="btn btn-primary">Enregister</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useGestionStore } from "../../stores/gestion";
import { ref } from "vue";

const gestion = useGestionStore();
const router = useRouter();
const nom = ref("");
const dateDebut = ref("");
const dateFin = ref("");
const formulaire = () => {
  gestion.addProjet({
    nom: nom.value,
    dateDebut: dateDebut.value,
    dateFin: dateFin.value,
  });
  router.push("/projets");

  nom.value = "";
  dateDebut.value = "";
  dateFin.value = "";
};
</script>
