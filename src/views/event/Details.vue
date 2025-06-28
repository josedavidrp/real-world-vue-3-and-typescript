<script setup>
const props = defineProps(['event'])
</script>

<template>
  <p>{{ event.time }} en {{ event.date }} en {{ event.location }}</p>
  <p>{{ event.description }}</p>
</template>
