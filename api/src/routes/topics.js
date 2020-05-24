const router = require('express').Router();

router.get('/', (req, res) => {
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
        id: 1,
        title: 'Vue.js',
        summary: '',
        image: ''
      },
      {
        id: 1,
        title: 'Express',
        summary: '',
        image: ''
      }
    ]
  });
});

module.exports = router;