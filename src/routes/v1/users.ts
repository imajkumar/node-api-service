import { Router } from 'express';

const router = Router();

// Define routes
router.get('/', (req, res) => {
  res.send('Hello, world!');
});

export default router;
