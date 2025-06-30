<script lang="ts">
import { useRouter } from 'vue-router'
import { defineComponent, inject, PropType } from 'vue'
import { EventItem } from '@/types'

export default defineComponent({
  name: 'RegisterView',
  props: {
    event: {
      type: Object as PropType<EventItem>,
      required: true,
    },
  },
  setup({ event }) {
    const router = useRouter()
    const GStore = inject('GStore')

    const register = () => {
      //Si el registro es correcto, volver a los detalles del evento
      GStore.flashMessage = 'Te has unido correctamente a: ' + event.title
      setTimeout(() => {
        GStore.flashMessage = ''
      }, 3000)
      router.push({
        name: 'EventDetails',
      })
    }
    return {
      register,
    }
  },
})
</script>

<template>
  <p>Apúntate al evento aquí</p>
  <button @click="register">¡Apúntame!</button>
</template>
