<template>
  <div class="container">
    <img src="static/images/homepage.jpg" class="img-fluid" alt="Homepage" />
    <div v-for="topic in topics" :key="topic.id">
      <hr class="featurette-divider" />
      <div class="row featurette">
        <div class="col-md-10">
          <h2 class="featurette-heading">
            {{ topic.title }}
          </h2>
          <h3>
            <span class="text-muted">{{ topic.summary }}</span>
          </h3>
          <p>{{ topic.description }}</p>
        </div>
        <div class="col-md-2">
          <img alt="logo" :src="topic.image" class="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data() {
    return {
      topics: []
    }
  },
  mounted() {
    axios
      .get('http://localhost:3000/topics')
      .then(response => {
        console.log(response)
        this.topics = response.data.topics
      })
  }
}
</script>

<style></style>
