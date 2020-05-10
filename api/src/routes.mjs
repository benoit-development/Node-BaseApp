import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send({
    id: 12345,
    name: "Benoît"
  });
});

export default router;
