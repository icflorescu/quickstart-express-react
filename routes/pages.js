import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('home', { title: 'Quickstart' });
});

router.get('/app', (req, res) => {
  res.render('app');
});

export default router;
