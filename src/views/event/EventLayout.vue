<script lang="ts">
import { ref, onMounted, defineComponent } from 'vue'
import EventService from '@/services/EventService.js'
import { useRouter } from 'vue-router'
import { EventItem } from '@/types'

export default defineComponent({
  name: 'EventLayout',
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const event = ref<EventItem | null>(null)
    const router = useRouter()
    onMounted(() => {
      EventService.getEvent(props.id)
        .then((response) => {
          event.value = response.data
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            router.push({
              name: '404Resource',
              params: { resource: 'evento' },
            })
          } else {
            router.push({ name: 'NetworkError' })
          }
        })
    })
    return {
      event,
    }
  },
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <nav>
      <RouterLink :to="{ name: 'EventDetails' }">Detalles</RouterLink>
      |
      <RouterLink :to="{ name: 'EventRegister' }">Apuntarse</RouterLink>
      |
      <RouterLink :to="{ name: 'EventEdit' }">Editar</RouterLink>
    </nav>
    <RouterView :event="event" />
  </div>
</template>
