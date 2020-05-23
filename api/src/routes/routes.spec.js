const assert = require('assert')
const supertest = require('supertest')
const server = require('../server.js')

describe('Routes', function () {
  it('should return expected result from /', function (done) {
    supertest(server)
      .get("/")
      .expect(200)
      .end(function (err, res) {
        if (err) done(err);
        assert.equal(res.body.id, 12345);
        assert.equal(res.body.name, "Benoît");
        done();
      });
  });
  it('should return 404 http code if route is inknown', function (done) {
    supertest(server)
      .get("/pouet")
      .expect(404)
      .end(function (err, res) {
        if (err) done(err);
        assert.equal(res.body.url, "/pouet not found");
        done();
      });
  });
});
