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
        summary: '',
        image: ''
      },
      {
        id: 2,
        title: 'Vue',
        summary: '',
        image: ''
      },
      {
        id: 3,
        title: 'Express',
        summary: '',
        image: ''
      }
    ]
  })
})

export default router
