<template>
  <div class="full-width center-content">
    <h1>Hello World!</h1>
    <hello-component name="Guybrush" />
  </div>
</template>

<script>
import HelloComponent from './components/HelloComponent.vue'

export default {
  components: {
    HelloComponent
  }
}
</script>
