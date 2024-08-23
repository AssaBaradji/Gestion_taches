<script setup>
import Footer from './components/Footer.vue';

</script>
<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Eighth navbar example">
    <div class="container p-3">
      <a class="navbar-brand" href="#">Gestion Taches</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample07">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link mx-4" to="/">Taches</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Projets">Projets</router-link>
          </li>
        </ul>
        <form>
          <input class="form-control" type="text" placeholder="Search" aria-label="Search">
        </form>
      </div>
    </div>
  </nav>
  <div> 
    <router-view />
    <Footer />
  </div>
 
</template>

<style scoped></style>
