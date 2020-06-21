import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../../src/server.js'
import Topic from '../../src/models/topics.js'

const { assert } = chai

chai.use(chaiHttp)
chai.should()

describe('Topics Routes', () => {


  it('should get a list of topics', async () => {
    const topic1 = new Topic({
      title: "a title",
      summary: "a summary",
      description: "a description",
      image: "an image",
    })
    await topic1.save();
    const topic2 = new Topic({
      title: "another title",
      summary: "another summary",
      description: "another description",
      image: "another image",
    })
    await topic2.save()
    const res = await chai.request(server).get('/topics')

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
  })


  it('should find a topic with its id', async () => {
    const topic = new Topic({
      title: "a title",
      summary: "a summary",
      description: "a description",
      image: "an image",
    })
    await topic.save()

    const res = await chai.request(server).get('/topics/' + topic._id)

    res.should.have.status(200)
    var foundTopic = res.body
    assert.equal("a title", foundTopic.title)
    assert.equal("a summary", foundTopic.summary)
    assert.equal("a description", foundTopic.description)
    assert.equal("an image", foundTopic.image)
  })


  it('should not find topic with wrong id', async () => {
    const topic = new Topic({
      title: "a title",
      summary: "a summary",
      description: "a description",
      image: "an image",
    })
    await topic.save()
    
    const res = await chai.request(server).get('/topics/wrongId')
    res.should.have.status(404)
  })


  it('should save a topic', async () => {
    let res = await chai.request(server)
      .post('/topics')
      .type('form')
      .send({
        title: "a title",
        summary: "a summary",
        description: "a description",
        image: "an image",
      })
    res.should.have.status(201)
    var topic = res.body
    assert.equal("a title", topic.title)
    assert.equal("a summary", topic.summary)
    assert.equal("a description", topic.description)
    assert.equal("an image", topic.image)


    res = await chai.request(server).get('/topics/' + topic._id)

    res.should.have.status(200)
    var foundTopic = res.body
    assert.equal("a title", foundTopic.title)
    assert.equal("a summary", foundTopic.summary)
    assert.equal("a description", foundTopic.description)
    assert.equal("an image", foundTopic.image)

  })


  it('should delete a topic with its id', async () => {
    const topic = new Topic({
      title: "a title",
      summary: "a summary",
      description: "a description",
      image: "an image",
    })
    await topic.save()
    
    let res = await chai.request(server).delete('/topics/' + topic._id)
    res.should.have.status(200)

    res = await chai.request(server).get('/topics')
    res.should.have.status(200)
    assert.equal(0, res.body.length)
  })


  it('should update a topic with its id', async () => {
    const topic = new Topic({
      title: "a title",
      summary: "a summary",
      description: "a description",
      image: "an image",
    })
    await topic.save()
    
    let res = await chai.request(server)
      .patch('/topics/' + topic._id)
      .send({
        title: "another title",
        summary: "another summary",
        description: "another description",
        image: "another image",
      })
    res.should.have.status(200)

    res = await chai.request(server).get('/topics/' + topic._id)
    res.should.have.status(200)
    var foundTopic = res.body
    assert.equal("another title", foundTopic.title)
    assert.equal("another summary", foundTopic.summary)
    assert.equal("another description", foundTopic.description)
    assert.equal("another image", foundTopic.image)
  })
  
})
