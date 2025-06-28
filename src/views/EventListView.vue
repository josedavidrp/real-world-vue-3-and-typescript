<script lang="ts">
import { defineComponent, ref, onMounted, watch, computed } from 'vue'
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'EventListView',
  components: {
    EventCard,
  },
  props: {
    page: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const events = ref(null)
    const totalEvents = ref(0)
    const totalPages = ref(0)

    const hasNextPage = computed(() => {
      return props.page < totalPages.value
    })

    const router = useRouter()

    const fetchEvents = () => {
      EventService.getEvents(3, props.page)
        .then((response) => {
          events.value = response.data
          totalEvents.value = parseInt(response.headers['x-total-count'])
          totalPages.value = Math.ceil(totalEvents.value / 3)
        })
        .catch(() => {
          router.push({ name: 'NetworkError' })
        })
    }

    onMounted(() => {
      fetchEvents()
    })

    watch(
      () => props.page,
      () => {
        events.value = null
        fetchEvents()
      },
    )

    return {
      events,
      totalPages,
      hasNextPage,
    }
  },
})
</script>

<template>
  <div class="events">
    <h1>Eventos de Valencia</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'home', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
      >
        &#60;
      </router-link>

      <router-link
        v-for="page in totalPages"
        :key="page"
        id="page-prev"
        :to="{ name: 'home', query: { page: page } }"
        rel="prev"
      >
        {{ page }}</router-link
      >

      <router-link
        id="page-next"
        :to="{ name: 'home', query: { page: page + 1 } }"
        rel="prev"
        v-if="hasNextPage"
      >
        &#62;</router-link
      >
    </div>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
