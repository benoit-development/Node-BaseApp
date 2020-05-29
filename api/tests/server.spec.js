import request from 'supertest'
import server from '../src/server'

describe('Server', () => {

  it("should response not found response on URL /", () => {
    return new Promise(done => {
      request(server)
        .get("/")
        .then(response => {
          expect(response.statusCode).toBe(404);
          expect(response.body.url).toBe('/ not found');
          done();
        })
    })
  })

  
  it("should response not found response on URL /donotexists", () => {
    return new Promise(done => {
      request(server)
        .get("/donotexists")
        .then(response => {
          expect(response.statusCode).toBe(404);
          expect(response.body.url).toBe('/donotexists not found');
          done();
        })
    })
  })

})
