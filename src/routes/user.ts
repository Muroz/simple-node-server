import { Router } from 'express';

const router = Router();

router.get('/users', async (req, res) => {
  res.status(500).send('Service unavailable');
});

export default router;
