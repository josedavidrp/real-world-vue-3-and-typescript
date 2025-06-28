<script setup>
defineProps({
  resource: {
    type: String,
    default: 'pagina',
  },
})
</script>

<template>
  <h1>Oh oh...</h1>
  <h3>{{ resource === 'pagina' ? 'La página' : 'El evento' }} que estas buscando no existe.</h3>
  <RouterLink :to="{ name: 'home' }">Volver al inicio</RouterLink>
</template>
