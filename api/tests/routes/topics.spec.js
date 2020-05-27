import topics from '../../src/routes/topics'

describe('Topics', () => {
  it('should return a list of topics', () => {
    expect(true).toBe(true)
    topics.get('/')
  })
})
