<template>
  <div id="app">
    <NavBar />
    <main role="main">
      <div class="container">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBarComponent.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>
