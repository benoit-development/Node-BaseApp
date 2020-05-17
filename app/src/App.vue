<template>
  <div id="app">
    <NavBar></NavBar>
    <main role="main">
      <div class="container">
        <router-view></router-view>
      </div>
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

<style></style>
