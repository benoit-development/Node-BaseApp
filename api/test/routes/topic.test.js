import chai from 'chai'
import chaiHttp from 'chai-http'
import route from '../../src/routes/topics.js'
import express from 'express'
import Topic from '../../src/models/topics.js'

const { assert } = chai

const server = express()
server.use(route)

chai.use(chaiHttp)
chai.should()

beforeEach(async () => {
});

describe('Topics Routes', () => {

  it('should get a list of topics', (done) => {
    const topic1 = new Topic({
      title: "a title",
      summary: "a summary",
      description: "a description",
      image: "an image",
    })
    const topic2 = new Topic({
      title: "another title",
      summary: "another summary",
      description: "another description",
      image: "another image",
    })
    topic1.save()
      .then(() => {
        topic2.save()
          .then(() => {
            chai.request(server)
              .get('/')
              .end((err, res) => {
                res.should.have.status(200)
                
                assert.equal(2, res.body.length)
                
                var firstTopic = res.body[0]
                assert.equal("a title", firstTopic.title)
                assert.equal("a summary", firstTopic.summary)
                assert.equal("a description", firstTopic.description)
                assert.equal("an image", firstTopic.image)
                
                var secondTopic = res.body[1]
                assert.equal("another title", secondTopic.title)
                assert.equal("another summary", secondTopic.summary)
                assert.equal("another description", secondTopic.description)
                assert.equal("another image", secondTopic.image)
                done()
              })
          })
      })
  })
  
})
