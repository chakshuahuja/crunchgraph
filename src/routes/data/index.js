import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    status: 'Okay',
  });
});

export default router;
