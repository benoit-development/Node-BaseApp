import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../../src/server.js'

const { assert } = chai

chai.use(chaiHttp)
chai.should()

describe('Auth Routes', () => {

    it('should not generate token without credentials', async () => {
        const res = await chai.request(server).post('/auth/login')
        res.should.have.status(401)
    })

    it('should generate token with wrong credentials', async () => {
        const res = await chai
            .request(server)
            .post('/auth/login')
            .send({
                username: 'john',
                password: "321"
            })
        res.should.have.status(401)
    })

    it('should generate token with godd credentials', async () => {
        const res = await chai
            .request(server)
            .post('/auth/login')
            .send({
                username: 'john',
                password: "123"
            })
        res.should.have.status(200)

        res.body.access_token.should.be.a('string')
    })

})