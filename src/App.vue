<script setup>
  import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink to="/" style="padding-right: 20px;">Overzicht</RouterLink>
    <RouterLink to="/add">Toevoegen</RouterLink>
  </nav>

  <RouterView/>
</template>

<style scoped>

</style>
