import { Router } from 'express';

const router = Router();

router.get('/', (req, res, next) => {
  res.render('home', { title: 'Quickstart' });
});

export default router;
