<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { inject } from 'vue'

const GStore = inject('GStore')
</script>

<template>
  <div id="app">
    <header>
      <div class="wrapper">
        <div id="flashMessage" v-if="GStore.flashMessage">
          {{ GStore.flashMessage }}
        </div>
        <nav>
          <RouterLink :to="{ name: 'home' }">Eventos</RouterLink> |
          <RouterLink :to="{ name: 'about' }">Sobre la web</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style>
@keyframes yellowfade {
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}

#flashMessage {
  animation-name: yellowfade;
  animation-duration: 3s;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
h2 {
  font-size: 20px;
}
body {
  margin-top: 0px;
}
</style>
