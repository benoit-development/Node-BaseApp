const router = require('express').Router();

router.get('/', (req, res) => {
  res.send({
    id: 12345,
    name: "Benoît"
  });
});

module.exports = router;