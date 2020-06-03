import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  console.log('Requesting topics')
  res.send({
    count: 3,
    topics: [
      {
        id: 1,
        title: 'Node.js',
        summary: 'JavaScript runtime build on Chrome V8 Javascript engine',
        description: 'As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.',
        image: 'http://localhost:3000/images/nodejs.png'
      },
      {
        id: 2,
        title: 'Vue',
        summary: 'Progressive framework for building user interfaces',
        description: 'Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.',
        image: 'http://localhost:3000/images/vue.png'
      },
      {
        id: 3,
        title: 'Express',
        summary: 'Minimal and flexible Node.js web application framework',
        description: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.',
        image: 'http://localhost:3000/images/express.png'
      }
    ]
  })
})

export default router
