<script setup>
import { useRouter } from 'vue-router'
import { defineProps, inject } from 'vue'
const { event } = defineProps(['event'])
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
</script>

<template>
  <p>Apúntate al evento aquí</p>
  <button @click="register">¡Apúntame!</button>
</template>
