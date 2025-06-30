<script lang="ts">
import { EventItem } from '@/types'
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  name: 'EditView',
  props: {
    event: {
      type: Object as PropType<EventItem>,
      required: true,
    },
  },
})
</script>

<template>
  <p>Edita el evento aquí</p>
</template>
