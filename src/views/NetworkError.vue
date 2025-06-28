<template>
  <div class="networkError">
    <h1>Uh-Oh!</h1>

    <h3>
      Parece que hay problemas de conexión, espera unos minutos y
      <a href="#" @click="$router.go(-1)">haz click aquí</a> para volver a intentarlo.
    </h3>
  </div>
</template>
