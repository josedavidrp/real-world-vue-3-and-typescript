<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'EventDetails',
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
})
</script>

<template>
  <p>{{ event.time }} el día {{ event.date }} en {{ event.location }}</p>
  <p>{{ event.description }}</p>
</template>
