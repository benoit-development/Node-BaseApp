import request from 'supertest'
import server from '../../src/server'

describe('Topics', () => {
  it("should response the GET method", () => {
    return new Promise(done => {
      request(server)
        .get("/topics")
        .then(response => {
          expect(response.statusCode).toBe(200)
          expect(response.body.count).toBe(3)
          expect(response.body.topics.count).toBe(3)
          done();
        })
    })
  })
})
