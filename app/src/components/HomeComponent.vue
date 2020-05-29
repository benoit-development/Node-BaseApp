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
          <p class="lead">
            Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.<br />
            As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network
            applications.
          </p>
        </div>
        <div class="col-md-2">
          <img alt="500x500" :src="'static/images/logos/' + topic.image" class="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      topics: []
    }
  },
  mounted() {
    this.topics = [
      {
        id: 1,
        title: 'Node.js',
        summary: 'node summary',
        image: 'nodejs.png'
      },
      {
        id: 2,
        title: 'Vue',
        summary: 'vue summary',
        image: 'vue.png'
      },
      {
        id: 3,
        title: 'Express',
        summary: 'Express summary',
        image: 'express.png'
      }
    ]
  }
}
</script>

<style></style>
