<script lang="ts">
import { EventItem } from '@/types'
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  name: 'EventDetails',
  props: {
    event: {
      type: Object as PropType<EventItem>,
      required: true,
    },
  },
})
</script>

<template>
  <p>{{ event.time }} el día {{ event.date }} en {{ event.location }}</p>
  <p>{{ event.description }}</p>
</template>
