<template>
  <div id="app">
    <NavBar />
    <main role="main">
      <router-view />
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

<style>
.full-width {
  width: 100%;
}

.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
