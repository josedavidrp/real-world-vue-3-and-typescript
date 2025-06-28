import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import EventLayout from '@/views/event/Layout.vue'
import NotFound from '@/views/NotFound.vue'
import NetworkError from '@/views/NetworkError.vue'

const AboutView = () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue')

const EventDetails = () =>
  import(/* webpackChunkName: "EventDetails" */ '@/views/event/Details.vue')
const EventRegister = () =>
  import(/* webpackChunkName: "EventDetails" */ '@/views/event/Register.vue')
const EventEdit = () => import(/* webpackChunkName: "EventDetails" */ '@/views/event/Edit.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: EventListView,
      props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    },
    {
      path: '/sobre-la-web',
      name: 'about',
      component: AboutView,
      alias: '/mas-info',
    },
    {
      path: '/about',
      redirect: { name: 'about' },
    },
    {
      path: '/eventos/:id',
      name: 'EventLayout',
      props: true,
      component: EventLayout,
      children: [
        {
          path: '',
          name: 'EventDetails',
          component: EventDetails,
        },
        {
          path: 'apuntarse',
          name: 'EventRegister',
          component: EventRegister,
        },
        {
          path: 'editar',
          name: 'EventEdit',
          component: EventEdit,
        },
      ],
    },
    {
      path: '/event/:afterEvent(.*)',
      redirect: (to) => {
        return { path: '/eventos/' + to.params.afterEvent }
      },
    },
    {
      path: '/404/:resource',
      name: '404Resource',
      component: NotFound,
      props: true,
    },
    {
      path: '/error-de-red',
      name: 'NetworkError',
      component: NetworkError,
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound,
    },
  ],
})

export default router
