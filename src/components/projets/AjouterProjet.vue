<template>
  <h1>Ajouet</h1>
  <div class="row">
    <form class="row g-3 needs-validation">
      <div class="col-md-4">
        <label for="validationCustom01" class="form-label">Nom</label>
        <input
          type="text"
          class="form-control"
          id="validationCustom01"
          value="Mark"
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
          value=""
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
          value=""
          required
        />
        <div class="valid-feedback">Looks good!</div>
      </div>
      <div class="col-12">
        <button class="btn btn-primary" type="submit">Submit form</button>
      </div>
    </form>
  </div>
</template>

<script setup></script>
