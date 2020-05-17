<template>
  <div class="app">
    <NavBar></NavBar>
    <main role="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
</style>
