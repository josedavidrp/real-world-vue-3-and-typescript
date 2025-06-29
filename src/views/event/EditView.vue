<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'EditView',
  props: {
    event: {
      required: true,
    },
  },
})
</script>

<template>
  <p>Edita el evento aquí</p>
</template>
